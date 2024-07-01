Correr python para sls offline

1. crear entorno virtual (linux)
python -m venv venv
2. activamos  el entorno virtual
source venv/binv/activate
3. Instalar boto3
pip install boto3
4. Ejecutamos sls
sls offline start