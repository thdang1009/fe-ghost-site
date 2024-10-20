export const schema = {
    '$id': 'http://example.com/example.json',
    'type': 'object',
    'definitions': {},
    '$schema': 'http://json-schema.org/draft-06/schema#',
    'properties': {
        'products': {
            '$id': '/properties/products',
            'type': 'array',
            'items': {
                '$id': '/properties/products/items',
                'type': 'object',
                'properties': {
                    'name': {
                        '$id': '/properties/products/items/properties/name',
                        'type': 'string',
                        'title': 'The Name Schema ',
                        'default': '',
                        'examples': [
                            'car'
                        ]
                    },
                    'product': {
                        '$id': '/properties/products/items/properties/product',
                        'type': 'array',
                        'items': {
                            '$id': '/properties/products/items/properties/product/items',
                            'type': 'object',
                            'properties': {
                                'name': {
                                    '$id': '/properties/products/items/properties/product/items/properties/name',
                                    'type': 'string',
                                    'title': 'The Name Schema ',
                                    'default': '',
                                    'examples': [
                                        'honda'
                                    ]
                                },
                                'model': {
                                    '$id': '/properties/products/items/properties/product/items/properties/model',
                                    'type': 'array',
                                    'items': {
                                        '$id': '/properties/products/items/properties/product/items/properties/model/items',
                                        'type': 'object',
                                        'properties': {
                                            'id': {
                                                '$id': '/properties/products/items/properties/product/items/properties/model/items/properties/id',
                                                'type': 'string',
                                                'title': 'The Id Schema ',
                                                'default': '',
                                                'examples': [
                                                    'civic'
                                                ]
                                            },
                                            'name': {
                                                '$id': '/properties/products/items/properties/product/items/properties/model/items/properties/name',
                                                'type': 'string',
                                                'title': 'The Name Schema ',
                                                'default': '',
                                                'examples': [
                                                    'civic'
                                                ]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};