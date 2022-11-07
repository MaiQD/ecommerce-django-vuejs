# ecommerce-django-vuejs
## Credentials
username: admin
password: admin
## CLI
virtualenv enviroment_3_10_4
.\enviroment_3_10_4\Scripts\activate
pip install django
pip install django-rest-framework
pip install django-cors-headers
pip install djoser
pip install pillow
pip install stripe

## Migration database
python .\manage.py makemigrations
python .\manage.py migrate

python .\manage.py createsuperuser
python .\manage.py runserver


## VueJS
npm install -g @vue/cli