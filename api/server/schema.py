CUSTOMER_SCHEMA = {
    'firstname': {
        'type': 'string'
    },
    'lastname': {
        'type': 'string',
        'required': True
    }
}

DOMAIN = {
    'customers': {
        "schema": CUSTOMER_SCHEMA
    }
}
