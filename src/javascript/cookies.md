# Cookies
---

document.cookie

### Agregar cookie
```
/**
 * key: LLave 
 * value: Valor
 * exp: Tiempo expiración min|h|d
*/

function setCookie(key, value, exp = '/'){
    let expiration = exp;
    if(exp.includes('min')){
        expiration = expiration.slice(0,-3) * 60;
    }else if(exp.includes('h')){
        expiration = expiration.slice(0,-1) * 3600;
    }else if(exp.includes('d')){
        expiration = expiration.slice(0,-1) * 86400;
    }
    document.cookie = `${key}=${JSON.stringify(value)}; max-age=${expiration}; path=/;`;
}
```

### Obtener cookie
```
function getCookie(key) {
    const match = document.cookie.match(RegExp('(?:^|;\\s*)' + key + '=([^;]*)'));
    return match ? match[1] : null;
}
```

### Remover cookie
```
function removeCookie(key){
    document.cookie = `${key}=; Expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;`;
}
```