const curatorCodes = ["1234", "5678", "9101"];

// Симуляция базы данных кураторов (в реале - backend)
const curatorDatabase = [
    { name: "John", surname: "Doe", country: "USA", city: "New York", birthdate: "1990-01-01", code: "1234" },
    { name: "Jane", surname: "Smith", country: "Canada", city: "Toronto", birthdate: "1985-05-15", code: "5678" }
];

const translations = {
    ru: {
        welcome: '<strong>ДОБРО ПОЖАЛОВАТЬ НА ЭКОДИКТАНТ. <br> ДЛЯ НАЧАЛА, ДАВАЙТЕ, ОПРЕДЕЛИМСЯ НА КАКОМ ЯЗЫКЕ ВАМ УДОБНО ОБЩАТЬСЯ</strong>',
        login_title: 'У вас уже есть существующий личный кабинет?',
        login_email_placeholder: 'Электронная почта',
        login_password_placeholder: 'Пароль',
        login_button: 'ВОЙТИ',
        login_register_link: 'ЗАРЕГИСТРИРОВАТЬСЯ',
        role_welcome: 'ТЕПЕРЬ ДАВАЙТЕ ОПРЕДЕЛИМ, КАКУЮ РОЛЬ ВЫ ХОТИТЕ ЗАНЯТЬ В НАШЕМ ПРОЕКТЕ',
        curator: 'КУРАТОР',
        volunteer: 'ВОЛОНТЕР',
        participant: 'УЧАСТНИК',
        registration_title: 'РЕГИСТРАЦИЯ',
        name: 'Имя',
        surname: 'Фамилия',
        birthdate: 'Дата рождения',
        phone: 'Телефон',
        email: 'Электронная почта',
        messenger: 'Мессенджер',
        secret_code_title: 'Введите секретный код',
        secret_code_label: 'Секретный код для подтверждения роли куратора *',
        no_secret_key: 'У меня нет кода',
        submit_key: 'Отправить',
        register_button: 'ЗАРЕГИСТРИРОВАТЬСЯ',
        change_password_link: 'Сменить пароль',
        change_password_title: 'Смена пароля',
        current_password_label: 'Текущий пароль',
        new_password_label: 'Новый пароль',
        confirm_new_password_label: 'Подтвердите новый пароль',
        change_password_button: 'Сменить пароль',
        password_error: 'Пароль должен содержать не менее 8 символов, включая буквы и цифры.',
        name_error: 'Имя не должно содержать цифры и специальные символы.',
        birthdate_future_error: 'Дата рождения не может быть в будущем.',
        birthdate_range_error: 'Пожалуйста, введите корректную дату рождения.',
        invalid_phone: 'Некорректный номер телефона.',
        invalid_email: 'Некорректный адрес электронной почты.',
        invalid_code: 'Мы не нашли такого секретного кода. Попробуйте ввести заново или подождите новый код.',
        validation_error: 'Пожалуйста, заполните все обязательные поля правильно.',
        login_error: 'Неправильный логин или пароль.',
        incorrect_current_password: 'Неправильный текущий пароль.',
        passwords_do_not_match: 'Новые пароли не совпадают.',
        password_changed_success: 'Пароль успешно изменен!',
        dashboard_title: 'Личный кабинет',
        welcome_user: 'Добро пожаловать,',
        participant_message: 'Вам доступен стандартный формат Экодиктанта. Нажмите на кнопку, чтобы начать.',
        start_dictant: 'Начать Экодиктант',
        curator_success_title: 'Вы успешно прошли авторизацию!',
        curator_message: 'Доступ одобрен. Ниже вы можете скачать необходимые документы и материалы.',
        curator_wait_title: 'Заявка на регистрацию отправлена!',
        curator_wait_message: 'Мы свяжемся с вами по предоставленным контактным данным после одобрения вашей заявки. Пожалуйста, ожидайте.',
        volunteer_message: 'Вы можете организовать собственное мероприятие. Чтобы скачать документы, дождитесь, пока куратор подтвердит ваше участие.',
        organize_event: 'Организовать мероприятие',
        curator_success_message: 'Доступ одобрен!',
        documents_title: 'Документы для заполнения',
        materials_title: 'Материалы для работы',
        flatpickr_locale: 'ru',
        dir: 'ltr',
        registration_success: 'Регистрация успешно завершена!',
        logout: 'Выйти',
        participant_dictant: 'Пройти Экодиктант',
        participant_kids_dictant: 'Пройти детский Экодиктант',
        participant_results: 'Ваши результаты',
        volunteer_create_event: 'Создать мероприятие',
        volunteer_tasks: 'Список задач',
        volunteer_pending: 'Ожидайте подтверждения от куратора',
        curator_manage_events: 'Управление площадками',
        curator_approve_volunteers: 'Одобрить волонтеров',
        curator_download_materials: 'Скачать материалы'
    },
    zh: {
        welcome: '<strong>欢迎参加生态听写! <br> 首先,请选择您习惯的交流语言。</strong>',
        login_title: '您已有个人账户吗?',
        login_email_placeholder: '电子邮件',
        login_password_placeholder: '密码',
        login_button: '登录',
        login_register_link: '注册账号',
        role_welcome: '现在让我们确定您想在我们的项目中扮演什么角色',
        curator: '策展人',
        volunteer: '志愿者',
        participant: '参与者',
        registration_title: '注册',
        name: '名',
        surname: '姓',
        birthdate: '出生日期',
        phone: '电话',
        email: '电子邮件',
        messenger: '通讯工具',
        secret_code_title: '输入秘密代码',
        secret_code_label: '确认策展人角色的秘密代码 *',
        no_secret_key: '我没有代码',
        submit_key: '提交',
        register_button: '注册',
        change_password_link: '更改密码',
        change_password_title: '更改密码',
        current_password_label: '当前密码',
        new_password_label: '新密码',
        confirm_new_password_label: '确认新密码',
        change_password_button: '更改密码',
        password_error: '密码必须至少包含8个字符，包括字母和数字。',
        name_error: '姓名不能包含数字和特殊字符。',
        birthdate_future_error: '出生日期不能在未来。',
        birthdate_range_error: '请输入正确的出生日期。',
        invalid_phone: '无效的电话号码。',
        invalid_email: '无效的电子邮件地址。',
        invalid_code: '我们找不到这样的秘密代码。请重试或等待新代码。',
        validation_error: '请正确填写所有必填字段。',
        login_error: '电子邮件或密码不正确。',
        incorrect_current_password: '当前密码不正确。',
        passwords_do_not_match: '新密码不匹配。',
        password_changed_success: '密码更改成功！',
        dashboard_title: '仪表板',
        welcome_user: '欢迎,',
        participant_message: '标准生态听写格式可供您使用。点击按钮开始。',
        start_dictant: '开始生态听写',
        curator_success_title: '授权成功!',
        curator_message: '访问已批准。您可以在下面下载所需的文件和材料。',
        curator_wait_title: '注册请求已发送!',
        curator_wait_message: '您的请求被批准后，我们将通过提供的联系方式与您联系。请稍候。',
        volunteer_message: '您可以组织自己的活动。要下载文件，请等待策展人确认您的参与。',
        organize_event: '组织活动',
        curator_success_message: '访问已批准!',
        documents_title: '要填写的文件',
        materials_title: '工作材料',
        flatpickr_locale: 'zh',
        dir: 'ltr',
        registration_success: '注册成功！',
        logout: '退出',
        participant_dictant: '通过生态听写',
        participant_kids_dictant: '通过儿童生态听写',
        participant_results: '您的结果',
        volunteer_create_event: '创建活动',
        volunteer_tasks: '任务列表',
        volunteer_pending: '等待策展人的确认',
        curator_manage_events: '管理场所',
        curator_approve_volunteers: '批准志愿者',
        curator_download_materials: '下载材料'
    },
    ar: {
        welcome: '<strong>مرحبًا بكم في ECODICTATION! <br> أولاً، دعنا نحدد اللغة التي تفضل التواصل بها.</strong>',
        login_title: 'هل لديك بالفعل حساب موجود؟',
        login_email_placeholder: 'البريد الإلكتروني',
        login_password_placeholder: 'كلمة المرور',
        login_button: 'تسجيل الدخول',
        login_register_link: 'تسجيل',
        role_welcome: 'الآن دعنا نحدد الدور الذي ترغب في شغله في مشروعنا',
        curator: 'المنسق',
        volunteer: 'متطوع',
        participant: 'مشارك',
        registration_title: 'تسجيل',
        name: 'الاسم',
        surname: 'اللقب',
        birthdate: 'تاريخ الميلاد',
        phone: 'الهاتف',
        email: 'البريد الإلكتروني',
        messenger: 'تطبيق المراسلة',
        secret_code_title: 'أدخل الرمز السري',
        secret_code_label: 'رمز سري لتأكيد دور المنسق *',
        no_secret_key: 'ليس لدي رمز',
        submit_key: 'إرسال',
        register_button: 'تسجيل',
        change_password_link: 'تغيير كلمة المرور',
        change_password_title: 'تغيير كلمة المرور',
        current_password_label: 'كلمة المرور الحالية',
        new_password_label: 'كلمة المرور الجديدة',
        confirm_new_password_label: 'تأكيد كلمة المرور الجديدة',
        change_password_button: 'تغيير كلمة المرور',
        password_error: 'يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل، بما في ذلك الأحرف والأرقام.',
        name_error: 'يجب ألا يحتوي الاسم على أرقام أو رموز خاصة.',
        birthdate_future_error: 'تاريخ الميلاد لا يمكن أن يكون في المستقبل.',
        birthdate_range_error: 'الرجاء إدخال تاريخ ميلاد صحيح.',
        invalid_phone: 'رقم الهاتف غير صالح.',
        invalid_email: 'عنوان البريد الإلكتروني غير صالح.',
        invalid_code: 'لم نجد مثل هذا الرمز السري. جرب إعادة الإدخال أو انتظر رمزًا جديدًا.',
        validation_error: 'الرجاء ملء جميع الحقول المطلوبة بشكل صحيح.',
        login_error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة.',
        incorrect_current_password: 'كلمة المرور الحالية غير صحيحة.',
        passwords_do_not_match: 'كلمات المرور الجديدة غير متطابقة.',
        password_changed_success: 'تم تغيير كلمة المرور بنجاح!',
        dashboard_title: 'لوحة التحكم',
        welcome_user: 'أهلاً بك،',
        participant_message: 'يتوفر لك تنسيق الإملاء البيئي القياسي. انقر على الزر للبدء.',
        start_dictant: 'ابدأ الإملاء البيئي',
        curator_success_title: 'تمت الموافقة على الدخول!',
        curator_message: 'تمت الموافقة على الوصول. يمكنك تنزيل المستندات والمواد اللازمة أدناه.',
        curator_wait_title: 'تم إرسال طلب التسجيل!',
        curator_wait_message: 'سنتصل بك عبر تفاصيل الاتصال المقدمة بعد الموافقة على طلبك. يرجى الانتظار.',
        volunteer_message: 'يمكنك تنظيم حدثك الخاص. لتنزيل المستندات، يرجى الانتظار حتى يؤكد المنسق مشاركتك.',
        organize_event: 'تنظيم حدث',
        curator_success_message: 'تمت الموافقة على الوصول!',
        documents_title: 'الوثائق المراد ملؤها',
        materials_title: 'مواد للعمل',
        flatpickr_locale: 'ar',
        dir: 'rtl',
        registration_success: 'تم التسجيل بنجاح!',
        logout: 'تسجيل الخروج',
        participant_dictant: 'اجتياز الإملاء البيئي',
        participant_kids_dictant: 'اجتياز الإملاء البيئي للأطفال',
        participant_results: 'نتائجك',
        volunteer_create_event: 'إنشاء حدث',
        volunteer_tasks: 'قائمة المهام',
        volunteer_pending: 'انتظر تأكيد المنسق',
        curator_manage_events: 'إدارة المواقع',
        curator_approve_volunteers: 'الموافقة على المتطوعين',
        curator_download_materials: 'تنزيل المواد'
    },
    en: {
        welcome: '<strong>WELCOME TO ECODICTATION! <br> FIRST, LET\'S DETERMINE WHICH LANGUAGE YOU ARE COMFORTABLE COMMUNICATING IN.</strong>',
        login_title: 'Do you already have an existing account?',
        login_email_placeholder: 'Email address',
        login_password_placeholder: 'Password',
        login_button: 'LOG IN',
        login_register_link: 'SIGN IN',
        role_welcome: 'NOW LET\'S DETERMINE WHICH ROLE YOU WANT TO TAKE ON IN OUR PROJECT',
        curator: 'CURATOR',
        volunteer: 'VOLUNTEER',
        participant: 'PARTICIPANT',
        registration_title: 'REGISTRATION',
        name: 'First Name',
        surname: 'Last Name',
        birthdate: 'Date of Birth',
        phone: 'Phone',
        email: 'Email',
        messenger: 'Messenger',
        secret_code_title: 'Enter Secret Code',
        secret_code_label: 'Secret code to confirm curator role *',
        no_secret_key: 'I don\'t have a code',
        submit_key: 'Submit',
        register_button: 'SIGN IN',
        change_password_link: 'Change Password',
        change_password_title: 'Change Password',
        current_password_label: 'Current Password',
        new_password_label: 'New Password',
        confirm_new_password_label: 'Confirm New Password',
        change_password_button: 'Change Password',
        password_error: 'Password must be at least 8 characters, including letters and numbers.',
        name_error: 'Name cannot contain numbers and special characters.',
        birthdate_future_error: 'Date of birth cannot be in the future.',
        birthdate_range_error: 'Please enter a valid date of birth.',
        invalid_phone: 'Invalid phone number.',
        invalid_email: 'Invalid email address.',
        invalid_code: 'We couldn\'t find such a secret code. Try entering again or wait for a new code.',
        validation_error: 'Please fill in all required fields correctly.',
        login_error: 'Incorrect email or password.',
        incorrect_current_password: 'Incorrect current password.',
        passwords_do_not_match: 'New passwords do not match.',
        password_changed_success: 'Password changed successfully!',
        dashboard_title: 'Dashboard',
        welcome_user: 'Welcome,',
        participant_message: 'The standard Eco-Dictation format is available for you. Click the button to start.',
        start_dictant: 'Start Eco-Dictation',
        curator_success_title: 'Authorization successful!',
        curator_message: 'Access approved. You can download the necessary documents and materials below.',
        curator_wait_title: 'Registration request sent!',
        curator_wait_message: 'We will contact you via the provided contact details after your request is approved. Please wait.',
        volunteer_message: 'You can organize your own event. To download documents, please wait for a curator to confirm your participation.',
        organize_event: 'Organize an event',
        curator_success_message: 'Access approved!',
        documents_title: 'Documents to fill out',
        materials_title: 'Materials for work',
        flatpickr_locale: 'en',
        dir: 'ltr',
        registration_success: 'Registration completed successfully!',
        logout: 'Logout',
        participant_dictant: 'Take Eco-Dictation',
        participant_kids_dictant: 'Take Kids Eco-Dictation',
        participant_results: 'Your Results',
        volunteer_create_event: 'Create Event',
        volunteer_tasks: 'Task List',
        volunteer_pending: 'Wait for Curator Confirmation',
        curator_manage_events: 'Manage Venues',
        curator_approve_volunteers: 'Approve Volunteers',
        curator_download_materials: 'Download Materials'
    }
};

let selectedLanguage = 'ru';
let selectedRole = null;
let userData = JSON.parse(localStorage.getItem('userData')) || null;
let fullAccess = false; // Для куратора

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    if (userData) {
        selectedLanguage = userData.lang || 'ru';
        selectedRole = userData.role;
        setLanguage(selectedLanguage, false); // Без показа модала ролей
        showDashboard();
    }
    flatpickr("#birthdate", {
        locale: translations[selectedLanguage].flatpickr_locale,
        dateFormat: "Y-m-d",
        maxDate: new Date()
    });
});

function setLanguage(lang, showRoleModal = true) {
    selectedLanguage = lang;
    const dir = translations[lang].dir;
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;

    // Обновление текстов
    document.getElementById('welcome').innerHTML = translations[lang].welcome;
    document.getElementById('role-welcome').innerHTML = translations[lang].role_welcome;
    document.getElementById('curator-label').textContent = translations[lang].curator;
    document.getElementById('volunteer-label').textContent = translations[lang].volunteer;
    document.getElementById('participant-label').textContent = translations[lang].participant;
    document.getElementById('secret-code-title').textContent = translations[lang].secret_code_title;
    document.getElementById('secret-code-label').textContent = translations[lang].secret_code_label;
    document.getElementById('no-secret-key').textContent = translations[lang].no_secret_key;
    document.getElementById('submit-key').textContent = translations[lang].submit_key;
    document.getElementById('registration-title').textContent = translations[lang].registration_title;
    document.getElementById('name-label').textContent = translations[lang].name + ' *';
    document.getElementById('surname-label').textContent = translations[lang].surname + ' *';
    document.getElementById('birthdate-label').textContent = translations[lang].birthdate + ' *';
    document.getElementById('phone-label').textContent = translations[lang].phone + ' *';
    document.getElementById('email-label').textContent = translations[lang].email + ' *';
    document.getElementById('messenger-label').textContent = translations[lang].messenger;
    document.getElementById('register-button').textContent = translations[lang].register_button;

    flatpickr("#birthdate", {
        locale: translations[lang].flatpickr_locale,
        dateFormat: "Y-m-d",
        maxDate: new Date()
    });

    if (showRoleModal) {
        openModal('role-modal');
    }
}

function selectRole(role) {
    selectedRole = role;
    closeModal('role-modal');
    if (role === 'curator') {
        openModal('secret-code-modal');
    } else {
        openModal('registration-modal');
    }
}

document.getElementById('secret-code-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const code = document.getElementById('secret-code').value.trim();
    const errorElement = document.getElementById('secret-code-error');

    if (!code) {
        errorElement.textContent = translations[selectedLanguage].validation_error;
        return;
    }

    if (curatorCodes.includes(code)) {
        fullAccess = true;
        closeModal('secret-code-modal');
        openModal('registration-modal');
    } else {
        errorElement.textContent = translations[selectedLanguage].invalid_code;
    }
});

function noSecretKey() {
    fullAccess = false;
    closeModal('secret-code-modal');
    openModal('registration-modal');
}

document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Базовая валидация (расширьте по необходимости)
    const name = document.getElementById('name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const birthdate = document.getElementById('birthdate').value;
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const messenger = document.getElementById('messenger').value.trim();

    // Простая проверка (в реале - используйте regex/библиотеки)
    let valid = true;
    if (!name || /\d/.test(name)) {
        document.getElementById('name-error').textContent = translations[selectedLanguage].name_error;
        valid = false;
    }
    if (!surname || /\d/.test(surname)) {
        document.getElementById('surname-error').textContent = translations[selectedLanguage].name_error;
        valid = false;
    }
    if (!birthdate || new Date(birthdate) > new Date()) {
        document.getElementById('birthdate-error').textContent = translations[selectedLanguage].birthdate_future_error;
        valid = false;
    }
    if (!phone || !/^\+?\d{10,15}$/.test(phone)) {
        document.getElementById('phone-error').textContent = translations[selectedLanguage].invalid_phone;
        valid = false;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('email-error').textContent = translations[selectedLanguage].invalid_email;
        valid = false;
    }

    if (!valid) return;

    userData = {
        name,
        surname,
        birthdate,
        phone,
        email,
        messenger,
        role: selectedRole,
        lang: selectedLanguage,
        isUnder18: calculateAge(birthdate) < 18,
        fullAccess // Для куратора
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    closeModal('registration-modal');
    showDashboard();
});

function calculateAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function showDashboard() {
    document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
    document.getElementById('welcome').style.display = 'none';
    document.querySelector('.language-options-container').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('dashboard-title').textContent = translations[selectedLanguage].dashboard_title;
    document.getElementById('welcome-user').textContent = `${translations[selectedLanguage].welcome_user} ${userData.name} ${userData.surname}!`;
    document.getElementById('logout-button').textContent = translations[selectedLanguage].logout;

    const content = document.getElementById('role-content');
    content.innerHTML = '';

    if (selectedRole === 'participant') {
        const dictantType = userData.isUnder18 ? translations[selectedLanguage].participant_kids_dictant : translations[selectedLanguage].participant_dictant;
        content.innerHTML = `
            <div class="dashboard-section">
                <h3>${translations[selectedLanguage].participant_message}</h3>
                <button class="action-button" onclick="startDictant()">${dictantType}</button>
            </div>
            <div class="dashboard-section">
                <h3>${translations[selectedLanguage].participant_results}</h3>
                <p>Здесь будут ваши результаты и сертификат (симуляция; в реале - интеграция с тестом).</p>
            </div>
        `;
    } else if (selectedRole === 'volunteer') {
        const isApproved = true; // Симуляция; в реале - запрос к backend
        content.innerHTML = `
            <div class="dashboard-section">
                <h3>${translations[selectedLanguage].volunteer_message}</h3>
                ${isApproved ? `
                    <form class="event-form" onsubmit="createEvent(event)">
                        <input type="text" placeholder="${translations[selectedLanguage].name}" required>
                        <input type="date" required>
                        <button type="submit">${translations[selectedLanguage].volunteer_create_event}</button>
                    </form>
                    <div id="tasks-list">
                        <h4>${translations[selectedLanguage].volunteer_tasks}</h4>
                        <ul><li>Задача 1 (симуляция)</li></ul>
                    </div>
                ` : `<p>${translations[selectedLanguage].volunteer_pending}</p>`}
            </div>
        `;
    } else if (selectedRole === 'curator') {
        const hasFullAccess = userData.fullAccess;
        content.innerHTML = `
            <div class="dashboard-section">
                <h3>${hasFullAccess ? translations[selectedLanguage].curator_success_message : translations[selectedLanguage].curator_wait_title}</h3>
                <p>${hasFullAccess ? translations[selectedLanguage].curator_message : translations[selectedLanguage].curator_wait_message}</p>
                ${hasFullAccess ? `
                    <button class="action-button" onclick="manageEvents()">${translations[selectedLanguage].curator_manage_events}</button>
                    <button class="action-button" onclick="approveVolunteers()">${translations[selectedLanguage].curator_approve_volunteers}</button>
                    <a href="materials.zip" download class="action-button">${translations[selectedLanguage].curator_download_materials}</a>
                ` : ''}
            </div>
        `;
    }
}

function startDictant() {
    alert('Запуск диктанта... (симуляция; интегрируйте реальный тест)');
}

function createEvent(e) {
    e.preventDefault();
    alert('Мероприятие создано! (симуляция; сохраните в backend)');
}

function manageEvents() {
    alert('Управление площадками... (симуляция; добавьте форму/таблицу)');
}

function approveVolunteers() {
    alert('Одобрение волонтеров... (симуляция; список из backend)');
}

function logout() {
    localStorage.clear();
    location.reload();
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}