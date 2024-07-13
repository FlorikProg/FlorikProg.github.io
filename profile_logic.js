async function login(username, password) {
    try {
      const response = await fetch('http://127.0.0.1:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      if (response.ok) {
        const data = await response.json();
        const token = data.access_token;
  
        // Сохраняем токен в cookie
        document.cookie = `access_token=${token}; path=/; max-age=${60 * 60 * 24 * 7}`; // Срок действия 7 дней
  
        return true;
      } else {
        throw new Error('Ошибка при входе в систему');
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  