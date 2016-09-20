import logging

import eve
import eve_swagger


def main():
    logging.basicConfig(level=logging.INFO)

    root = logging.getLogger()

    logging.info("API is coming up")

    app = eve.Eve()
    app.register_blueprint(eve_swagger.swagger)

    app.config['SWAGGER_INFO'] = {
        'title': 'Seed API',
        'version': '1.0',
        'description': 'API for Seed',
        'termsOfService': 'Be good, or be good at it.',
        'contact': {
            'name': 'Dave',
            'url': 'http://github.com/dlemphers'
        },
        'license': {
            'name': 'MIT',
            'url': 'https://opensource.org/licenses/MIT',
        }
    }

    app.run(host="0.0.0.0", port=8888)
