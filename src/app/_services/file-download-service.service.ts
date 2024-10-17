import { DOCUMENT } from "@angular/common";
import { HttpClient, HttpEvent, HttpEventType } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { WINDOW } from "src/window";

@Injectable({ providedIn: 'root' })
export class FileDownloadService {
  private _window = inject(WINDOW);
  private _document = inject(DOCUMENT);

  constructor(private http: HttpClient) { }


  /**
   * download file with report progress and save dialog.
   *
   * @param url
   * @param fileName
   *
   * @return Observable contains progress by percent
   *
   */
  downloadFile(url: string, fileName: string): Observable<number> {
    return new Observable(observer => {
      this.requestDownload(url).subscribe((event: HttpEvent<Blob>) => {
        if (event.type === HttpEventType.DownloadProgress) {
          const percentDone = Math.round(100 * event.loaded / event.total);
          observer.next(percentDone);
        }
        if (event.type === HttpEventType.Response) {
          this.saveDownloadResult(event.body, fileName);
          observer.complete();
        }
      });
    }
    );
  }

  private saveDownloadResult(blob: Blob, fileName) {
    if (this._window.navigator && (this._window.navigator as any).msSaveOrOpenBlob) {
      (this._window.navigator as any).msSaveOrOpenBlob(
        blob,
        fileName
      );
    }
    else {
      const windowURL = this._window['URL'] || this._window['webkitURL'];
      const downloadLink = this._document.createElement('a');
      const urlBlob = windowURL.createObjectURL(new Blob([blob]));
      downloadLink.href = urlBlob;
      downloadLink.download = fileName;
      downloadLink.click();
      setTimeout(function () { URL.revokeObjectURL(downloadLink.href) }, 4E4);
    }
  }

  private requestDownload(url: string): Observable<HttpEvent<Blob>> {
    return this.http.get(url, {
      responseType: 'blob',
      reportProgress: true,
      observe: 'events',
    })
  }
}
