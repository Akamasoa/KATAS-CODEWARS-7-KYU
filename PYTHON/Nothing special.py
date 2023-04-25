"""
DESCRIPTION:
The notorious Captain Schneider has given you a very straight forward mission. Any data that comes through the system make sure that only non-special characters see the light of day.

Create a function that given a string, retains only the letters A-Z (upper and lowercase), 0-9 digits, and whitespace characters. Also, returns "Not a string!" if the entry type is not a string.
"""

def nothing_special(s):
    # Verifico si la entrada es una cadena de texto:
    if not isinstance(s, str):
        return "Not a string!"
    
    # Creo una cadena de caracteres permitidos que incluya letras mayúsculas y minúsculas, dígitos y espacios en blanco:
    allowed_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 "
    
    # Filto la cadena original para mantener sólo los caracteres permitidos:
    filtered_string = ''.join(c for c in s if c in allowed_chars)
    
    return filtered_string
