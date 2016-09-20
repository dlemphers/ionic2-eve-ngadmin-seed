import setuptools
import setuptools.command.install

setuptools.setup(
    name='Seed API',
    version='1',
    author='github.com/dlemphers',
    entry_points={
        'console_scripts': [
            'api = server.server:main',
        ]
    },
    packages=setuptools.find_packages()
)
