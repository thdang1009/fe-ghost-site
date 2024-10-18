# Angular

This is a personal blogs including some other features like:
- Blogs (write, read, manage blogs + file + tags + categories)
- About me pages
- To do list, Note, 
- Book management
- User management
- Dev's tool like: JSON beautifier, JSON & Excel, JavaScript's playground

# TECH DEBT:
- dymanic-index.component.html is not working anymore
- css delete button for page /note is working in a wrong way
- temporary disable run code in bulk
- temporary disable RunJS because it need load Firstly and it's super heavy to load
- ~ssr is broken because of "document is not defined" in 3rd lib pdfjs-dist, pdf_viewer, ng2-pdf-viewer~

# Change log Oct 18th
- add proxy to avoid CORS, update environment to adapt proxy
- remove and restructure, path, routing
- temporary remove all feature relate to window
- one step close to ssr all page
# What to do Oct 18th
- remove/replace all feature relate to DOM, document, window, element, v.v...
- re-enable View book by finding solution or new Pdf lib
- re-enable RunJS
- re-structure module
