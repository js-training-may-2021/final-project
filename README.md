# POKEDEX

### Интерфейс:

1. **Главная страница**. Здесь выводится список покемонов. В каждой карточке картинка покемона, его имя и кнопка "Поймать". Если покемон уже пойман - кнопка будет заблокирована. При нажатии на покемона - осуществляется переход на его страницу. Также есть возможность изменить порядок отображения и поиск покемона по id/имени.

2. **Страница покемона**. Здесь выводится информация по указанному покемону: id, имя, картинка, статус (пойман или нет), дата поимки(если он пойман). Также доступна навигация к следующему/предыдущему покемону(по id).

3. **Пойманные покемоны**. Здесь выводится список пойманных покемонов. В каждой карточке картинка покемона, его имя и дата поимки. При нажатии на покемона - осуществляется переход на его страницу. 

4. **Настройки**. Здесь пользователь может выбрать язык интерфейса(английский или русский), тему приложения(светлая или темная), а также имеет возможность зайти в аккаут для сохранения своих результатов(логин: test, пароль: test). Настройки языка и темы приложения сохраняются для всех пользователей автоматически(для текущего браузера)

5. **Дополнительно**. Есть возможность изменить порядок отображения и поиск покемона по id/имени на главной странице и странице пойманных покемонов.(Примечание: сортировка и поиск глобальны для всего приложения).

### Для запуска приложения локально

1. Development npm run start-dev (авторизация в этом режиме не работает)

2. Production npm run start-prod

3. Приложение будет доступно по адресу http://localhost:5000 (в development моде порт 3000 занят json-server'ом)

4. Рабочий деплой https://shielded-springs-34567.herokuapp.com/
