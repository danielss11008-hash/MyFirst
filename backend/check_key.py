import os
os.environ.pop('STEAM_API_KEY', None)
from backend import main
try:
    main.read_root()
    print('NO_ERROR')
except Exception as e:
    print(type(e).__name__ + ': ' + str(e))
