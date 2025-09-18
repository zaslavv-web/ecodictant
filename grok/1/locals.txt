const curatorCodes = ["1234", "5678", "9101"];

// База данных кураторов для проверки (имитация)
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
        name: 'Имя *',
        surname: 'Фамилия *',
        birthdate: 'Дата рождения *',
        phone: 'Телефон *',
        email: 'Электронная почта *',
        messenger: 'Мессенджер',
        register_button: 'ЗАРЕГИСТРИРОВАТЬСЯ',
        secret_code: 'Секретный код',
        no_secret_key: 'У меня нет ключа',
        submit_key: 'Подтвердить',
        change_password_title: 'Смена пароля',
        current_password_label: 'Текущий пароль',
        new_password_label: 'Новый пароль',
        confirm_new_password_label: 'Подтвердите новый пароль',
        change_password_button: 'Сменить пароль',
        name_error: 'Имя должно содержать только буквы, пробелы или дефисы.',
        birthdate_future_error: 'Дата рождения не может быть в будущем.',
        birthdate_range_error: 'Пожалуйста, введите корректный год рождения (1900-2020).',
        invalid_phone: 'Неверный формат номера телефона.',
        invalid_email: 'Неверный адрес электронной почты.',
        invalid_code: 'Неверный код. Попробуйте еще раз.',
        validation_error: 'Пожалуйста, заполните все обязательные поля корректно.',
        login_error: 'Неверный адрес электронной почты или пароль.',
        incorrect_current_password: 'Неверный текущий пароль.',
        passwords_do_not_match: 'Новые пароли не совпадают.',
        password_changed_success: 'Пароль успешно изменен!',
        dashboard_title: 'Личный кабинет',
        welcome_user: 'Добро пожаловать,',
        participant_message: 'Для вас доступен стандартный формат Экодиктанта. Нажмите кнопку, чтобы начать.',
        start_dictant: 'Начать Экодиктант',
        curator_success_title: 'Авторизация прошла успешно!',
        curator_message: 'Доступ одобрен. Вы можете скачать необходимые документы и материалы ниже.',
        curator_wait_message: 'Запрос на регистрацию отправлен!',
        curator_pending_details: 'Мы свяжемся с вами по указанным контактам после одобрения вашей заявки. Пожалуйста, ожидайте.',
        volunteer_message: 'Вы можете организовать собственное мероприятие. Для загрузки документов, пожалуйста, дождитесь подтверждения участия куратором.',
        organize_event: 'Организовать мероприятие',
        curator_success_message: 'Доступ одобрен!',
        documents_title: 'Документы для заполнения',
        materials_title: 'Материалы для работы',
        flatpickr_locale: 'ru',
        dir: 'ltr',
        registration_success: 'Регистрация успешно завершена!',
        profile_title: 'Личный кабинет',
        profile_name_label: 'Имя:',
        profile_surname_label: 'Фамилия:',
        profile_birthdate_label: 'Дата рождения:',
        profile_phone_label: 'Телефон:',
        profile_email_label: 'Электронная почта:',
        profile_messenger_label: 'Мессенджер:',
        edit_profile_button: 'РЕДАКТИРОВАТЬ',
        save_profile_button: 'СОХРАНИТЬ',
        consent_text: 'Нажимая на кнопку зарегистрироваться, я подтверждаю, что ознакомился с <a href="#" class="policy-link">политикой обработки персональных данных</a>.',
        consent_error: 'Вы должны принять политику обработки персональных данных'
    },
    en: {
        welcome: '<strong>WELCOME TO THE ECO-DICTATION. <br> TO BEGIN, LET\'S DECIDE WHICH LANGUAGE IS CONVENIENT FOR YOU TO COMMUNICATE IN</strong>',
        login_title: 'Do you already have an existing personal account?',
        login_email_placeholder: 'Email',
        login_password_placeholder: 'Password',
        login_button: 'SIGN IN',
        login_register_link: 'SIGN UP',
        role_welcome: 'NOW LET\'S DETERMINE WHAT ROLE YOU WANT TO TAKE IN OUR PROJECT',
        curator: 'CURATOR',
        volunteer: 'VOLUNTEER',
        participant: 'PARTICIPANT',
        registration_title: 'REGISTRATION',
        name: 'First Name *',
        surname: 'Last Name *',
        birthdate: 'Date of Birth *',
        phone: 'Phone Number *',
        email: 'Email *',
        messenger: 'Messenger',
        register_button: 'REGISTER',
        secret_code: 'Secret Key',
        no_secret_key: 'I don\'t have a key',
        submit_key: 'Submit',
        change_password_title: 'Change Password',
        current_password_label: 'Current password',
        new_password_label: 'New password',
        confirm_new_password_label: 'Confirm new password',
        change_password_button: 'Change Password',
        name_error: 'Name must contain only letters, spaces or hyphens.',
        birthdate_future_error: 'Date of birth cannot be in the future.',
        birthdate_range_error: 'Please enter a valid year of birth (1900-2020).',
        invalid_phone: 'Invalid phone number format.',
        invalid_email: 'Invalid email address.',
        invalid_code: 'Invalid code. Please try again.',
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
        curator_wait_message: 'Registration request sent!',
        curator_pending_details: 'We will contact you via the provided contact details after your request is approved. Please wait.',
        volunteer_message: 'You can organize your own event. To download documents, please wait for a curator to confirm your participation.',
        organize_event: 'Organize an event',
        curator_success_message: 'Access approved!',
        documents_title: 'Documents to fill out',
        materials_title: 'Materials for work',
        flatpickr_locale: 'en',
        dir: 'ltr',
        registration_success: 'Registration completed successfully!',
        profile_title: 'Profile',
        profile_name_label: 'Name:',
        profile_surname_label: 'Surname:',
        profile_birthdate_label: 'Date of Birth:',
        profile_phone_label: 'Phone:',
        profile_email_label: 'Email:',
        profile_messenger_label: 'Messenger:',
        edit_profile_button: 'EDIT',
        save_profile_button: 'SAVE',
        consent_text: 'By clicking the register button, I confirm that I have read the <a href="#" class="policy-link">Personal Data Processing Policy</a>.',
        consent_error: 'You must accept the Personal Data Processing Policy'
    },
    zh: {
        welcome: '<strong>欢迎来到生态听写。 <br> 首先，让我们确定您方便用哪种语言进行交流</strong>',
        login_title: '您是否已有个人账户？',
        login_email_placeholder: '邮箱',
        login_password_placeholder: '密码',
        login_button: '登录',
        login_register_link: '注册',
        role_welcome: '现在让我们确定您想在我们的项目中扮演什么角色',
        curator: '策展人',
        volunteer: '志愿者',
        participant: '参与者',
        registration_title: '注册',
        name: '姓名 *',
        surname: '姓氏 *',
        birthdate: '出生日期 *',
        phone: '电话 *',
        email: '邮箱 *',
        messenger: '通讯软件',
        register_button: '注册',
        secret_code: '密钥',
        no_secret_key: '我没有密钥',
        submit_key: '确认',
        change_password_title: '修改密码',
        current_password_label: '当前密码',
        new_password_label: '新密码',
        confirm_new_password_label: '确认新密码',
        change_password_button: '修改密码',
        name_error: '姓名只能包含字母、空格或连字符。',
        birthdate_future_error: '出生日期不能在未来。',
        birthdate_range_error: '请输入正确的出生年份（1900-2020）。',
        invalid_phone: '电话号码格式不正确。',
        invalid_email: '邮箱地址不正确。',
        invalid_code: '代码无效。请重试。',
        validation_error: '请正确填写所有必填字段。',
        login_error: '邮箱或密码不正确。',
        incorrect_current_password: '当前密码不正确。',
        passwords_do_not_match: '新密码不匹配。',
        password_changed_success: '密码修改成功！',
        dashboard_title: '个人中心',
        welcome_user: '欢迎，',
        participant_message: '您可以参加标准格式的生态听写。点击按钮开始。',
        start_dictant: '开始生态听写',
        curator_success_title: '授权成功！',
        curator_message: '访问已获批准。您可以在下面下载所需的文件和材料。',
        curator_wait_message: '注册请求已发送！',
        curator_pending_details: '您的申请批准后，我们将通过您提供的联系方式与您联系。请耐心等待。',
        volunteer_message: '您可以组织自己的活动。要下载文件，请等待策展人确认您的参与。',
        organize_event: '组织活动',
        curator_success_message: '访问已获批准！',
        documents_title: '要填写的文件',
        materials_title: '工作材料',
        flatpickr_locale: 'zh',
        dir: 'ltr',
        registration_success: '注册成功！',
        profile_title: '个人资料',
        profile_name_label: '名字:',
        profile_surname_label: '姓氏:',
        profile_birthdate_label: '出生日期:',
        profile_phone_label: '电话:',
        profile_email_label: '邮箱:',
        profile_messenger_label: '通讯软件:',
        edit_profile_button: '编辑',
        save_profile_button: '保存',
        consent_text: '点击注册按钮，即表示我确认已阅读<a href="#" class="policy-link">个人数据处理政策</a>。',
        consent_error: '您必须接受个人数据处理政策'
    },
    ar: {
        welcome: '<strong>مرحبًا بك في الإملاء البيئي. <br> لكي نبدأ، دعنا نحدد اللغة التي تفضلها للتواصل</strong>',
        login_title: 'هل لديك حساب شخصي بالفعل؟',
        login_email_placeholder: 'البريد الإلكتروني',
        login_password_placeholder: 'كلمة المرور',
        login_button: 'تسجيل الدخول',
        login_register_link: 'تسجيل',
        role_welcome: 'الآن دعنا نحدد الدور الذي ترغب في توليه في مشروعنا',
        curator: 'المنسق',
        volunteer: 'المتطوع',
        participant: 'المشارك',
        registration_title: 'تسجيل',
        name: 'الاسم الأول *',
        surname: 'الاسم الأخير *',
        birthdate: 'تاريخ الميلاد *',
        phone: 'رقم الهاتف *',
        email: 'البريد الإلكتروني *',
        messenger: 'برنامج المراسلة',
        register_button: 'تسجيل',
        secret_code: 'رمز سري',
        no_secret_key: 'ليس لدي رمز',
        submit_key: 'تأكيد',
        change_password_title: 'تغيير كلمة المرور',
        current_password_label: 'كلمة المرور الحالية',
        new_password_label: 'كلمة المرور الجديدة',
        confirm_new_password_label: 'تأكيد كلمة المرور الجديدة',
        change_password_button: 'تغيير كلمة المرور',
        name_error: 'يجب أن يحتوي الاسم على أحرف أو مسافات أو واصلات فقط.',
        birthdate_future_error: 'لا يمكن أن يكون تاريخ الميلاد في المستقبل.',
        birthdate_range_error: 'الرجاء إدخال سنة ميلاد صحيحة (1900-2020).',
        invalid_phone: 'تنسيق رقم الهاتف غير صالح.',
        invalid_email: 'عنوان البريد الإلكتروني غير صالح.',
        invalid_code: 'رمز غير صالح. يرجى المحاولة مرة أخرى.',
        validation_error: 'يرجى ملء جميع الحقول المطلوبة بشكل صحيح.',
        login_error: 'بريد إلكتروني أو كلمة مرور غير صحيحة.',
        incorrect_current_password: 'كلمة المرور الحالية غير صحيحة.',
        passwords_do_not_match: 'كلمات المرور الجديدة لا تتطابق.',
        password_changed_success: 'تم تغيير كلمة المرور بنجاح!',
        dashboard_title: 'لوحة التحكم',
        welcome_user: 'أهلاً بك،',
        participant_message: 'يتوفر لك الشكل القياسي للإملاء البيئي. انقر فوق الزر للبدء.',
        start_dictant: 'بدء الإملاء البيئي',
        curator_success_title: 'الترخيص ناجح!',
        curator_message: 'تمت الموافقة على الوصول. يمكنك تنزيل المستندات والمواد اللازمة أدناه.',
        curator_wait_message: 'تم إرسال طلب التسجيل!',
        curator_pending_details: 'سنتصل بك عبر تفاصيل الاتصال المقدمة بعد الموافقة على طلبك. يرجى الانتظار.',
        volunteer_message: 'يمكنك تنظيم حدثك الخاص. لتنزيل المستندات، يرجى الانتظار حتى يؤكد المنسق مشاركتك.',
        organize_event: 'تنظيم حدث',
        curator_success_message: 'تمت الموافقة على الوصول!',
        documents_title: 'المستندات التي يجب ملؤها',
        materials_title: 'المواد اللازمة لل العمل',
        flatpickr_locale: 'ar',
        dir: 'rtl',
        registration_success: 'تمت عملية التسجيل بنجاح!',
        profile_title: 'ملف شخصي',
        profile_name_label: 'الاسم:',
        profile_surname_label: 'الكنية:',
        profile_birthdate_label: 'تاريخ الميلاد:',
        profile_phone_label: 'الهاتف:',
        profile_email_label: 'البريد الإلكتروني:',
        profile_messenger_label: 'برنامج المراسلة:',
        edit_profile_button: 'تعديل',
        save_profile_button: 'حفظ',
        consent_text: 'بالنقر على زر التسجيل، أوكد أنني قد اطلعت على <a href="#" class="policy-link">سياسة معالجة البيانات الشخصية</a>.',
        consent_error: 'يجب عليك قبول سياسة معالجة البيانات الشخصية'
    }
};

const userCredentials = {};
let currentRole = null;
let currentLanguage = 'ru';
let datePickerInstance = null;
let currentUser = null;

const hideElement = (id) => {
    const element = document.getElementById(id);
    if (element) element.style.display = 'none';
};

const showElement = (id, displayStyle = 'block') => {
    const element = document.getElementById(id);
    if (element) element.style.display = displayStyle;
};

function setLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = translations[lang].dir;

    document.getElementById('welcome').innerHTML = translations[lang].welcome;
    document.getElementById('login-title').textContent = translations[lang].login_title;
    document.getElementById('login-email').placeholder = translations[lang].login_email_placeholder;
    document.getElementById('login-password').placeholder = translations[lang].login_password_placeholder;
    document.getElementById('login-button').textContent = translations[lang].login_button;
    document.getElementById('register-link-from-login').textContent = translations[lang].login_register_link;
    document.getElementById('role-welcome-text').textContent = translations[lang].role_welcome;
    document.getElementById('curator-label').textContent = translations[lang].curator;
    document.getElementById('volunteer-label').textContent = translations[lang].volunteer;
    document.getElementById('participant-label').textContent = translations[lang].participant;
    document.getElementById('registration-title').textContent = translations[lang].registration_title;
    document.getElementById('name-label').textContent = translations[lang].name;
    document.getElementById('surname-label').textContent = translations[lang].surname;
    document.getElementById('birthdate-label').textContent = translations[lang].birthdate;
    document.getElementById('phone-label').textContent = translations[lang].phone;
    document.getElementById('email-label').textContent = translations[lang].email;
    document.getElementById('messenger-label').textContent = translations[lang].messenger;
    document.getElementById('register-button').textContent = translations[lang].register_button;
    document.getElementById('secret-key-title').textContent = translations[lang].curator;
    document.getElementById('secret-code-label').textContent = translations[lang].secret_code;
    document.getElementById('no-key-button').textContent = translations[lang].no_secret_key;
    document.getElementById('submit-key-button').textContent = translations[lang].submit_key;
    document.getElementById('dashboard-title').textContent = translations[lang].dashboard_title;
    document.getElementById('curator-message').textContent = translations[lang].curator_message;
    document.getElementById('documents-title').textContent = translations[lang].documents_title;
    document.getElementById('materials-title').textContent = translations[lang].materials_title;
    document.getElementById('curator-wait-message').textContent = translations[lang].curator_wait_message;
    document.getElementById('curator-wait-details').textContent = translations[lang].curator_pending_details;
    document.getElementById('profile-title').textContent = translations[lang].profile_title;
    document.getElementById('profile-name-label').textContent = translations[lang].profile_name_label;
    document.getElementById('profile-surname-label').textContent = translations[lang].profile_surname_label;
    document.getElementById('profile-birthdate-label').textContent = translations[lang].profile_birthdate_label;
    document.getElementById('profile-phone-label').textContent = translations[lang].profile_phone_label;
    document.getElementById('profile-email-label').textContent = translations[lang].profile_email_label;
    document.getElementById('profile-messenger-label').textContent = translations[lang].profile_messenger_label;
    document.getElementById('edit-profile-btn').textContent = translations[lang].edit_profile_button;
    document.getElementById('save-profile-btn').textContent = translations[lang].save_profile_button;
    document.getElementById('change-password-btn').textContent = translations[lang].change_password_button;
    document.getElementById('change-password-title').textContent = translations[lang].change_password_title;
    document.getElementById('current-password-label').textContent = translations[lang].current_password_label;
    document.getElementById('new-password-label').textContent = translations[lang].new_password_label;
    document.getElementById('confirm-new-password-label').textContent = translations[lang].confirm_new_password_label;
    document.getElementById('change-password-button').textContent = translations[lang].change_password_button;
    document.getElementById('consent-text').innerHTML = translations[lang].consent_text;
    datePickerInstance.set('locale', translations[lang].flatpickr_locale);
    
    // Hide all dashboard sections initially
    hideElement('participant-dashboard');
    hideElement('curator-dashboard');
    hideElement('volunteer-dashboard');

    if (currentUser) {
        if (currentUser.role === 'participant') {
            showElement('participant-dashboard', 'block');
            document.getElementById('welcome-user').textContent = translations[lang].welcome_user + ' ' + currentUser.name + '!';
            document.getElementById('participant-message').textContent = translations[lang].participant_message;
            document.getElementById('start-dictant').textContent = translations[lang].start_dictant;
        } else if (currentUser.role === 'curator') {
            showElement('curator-dashboard', 'block');
            document.getElementById('welcome-curator').textContent = translations[lang].curator_success_title;
        } else if (currentUser.role === 'volunteer') {
            showElement('volunteer-dashboard', 'block');
            document.getElementById('welcome-volunteer').textContent = translations[lang].volunteer;
            document.getElementById('volunteer-message').textContent = translations[lang].volunteer_message;
            document.getElementById('organize-event').textContent = translations[lang].organize_event;
        }
    }
}

function showModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'flex';
        document.body.classList.add('no-scroll');
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'none';
        document.body.classList.remove('no-scroll');
        clearForm(id);
    }
}

function clearForm(modalId) {
    const form = document.querySelector(`#${modalId} form`);
    if (form) {
        form.reset();
    }
    const errors = document.querySelectorAll(`#${modalId} .error-message`);
    errors.forEach(err => err.textContent = '');
}

function handleRegistration(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const birthdate = document.getElementById('birthdate').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const messenger = document.getElementById('messenger').value;
    const consentCheckbox = document.getElementById('privacyPolicyConsent');
    const formError = document.getElementById('form-error');

    formError.textContent = '';
    
    if (!name || !surname || !birthdate || !phone || !email) {
        formError.textContent = translations[currentLanguage].validation_error;
        return;
    }

    if (!consentCheckbox.checked) {
        document.getElementById('consent-error').textContent = translations[currentLanguage].consent_error;
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('email-error').textContent = translations[currentLanguage].invalid_email;
        return;
    }

    // Имитация успешной регистрации
    currentUser = { name, surname, birthdate, phone, email, messenger, role: currentRole };
    closeModal('registration-modal');

    // Show the correct screen based on the role
    if (currentRole === 'curator') {
        showModal('curator-wait-modal');
    } else {
        showProfileScreen(currentUser);
    }
}

function handleLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const errorMsg = document.getElementById('login-error');
    errorMsg.textContent = '';

    // Имитация проверки
    const user = Object.values(userCredentials).find(user => user.email === email && user.password === password);
    if (user) {
        currentUser = user;
        closeModal('login-modal');
        if (currentUser.role === 'curator') {
            showDashboard('curator');
        } else {
            showProfileScreen(currentUser);
        }
    } else {
        errorMsg.textContent = translations[currentLanguage].login_error;
    }
}

function handleRoleSelection(role) {
    currentRole = role;
    closeModal('role-modal');
    if (role === 'curator') {
        showModal('secret-key-modal');
    } else {
        showModal('registration-modal');
    }
}

function handleSecretKeySubmit() {
    const code = document.getElementById('secretCode').value;
    const errorMsg = document.getElementById('secret-code-error');
    errorMsg.textContent = '';

    if (curatorCodes.includes(code)) {
        const curatorData = curatorDatabase.find(c => c.code === code);
        currentUser = { ...curatorData, role: 'curator' };
        closeModal('secret-key-modal');
        showDashboard('curator');
    } else {
        errorMsg.textContent = translations[currentLanguage].invalid_code;
    }
}

function handleNoKey() {
    closeModal('secret-key-modal');
    currentRole = 'volunteer';
    showModal('registration-modal');
}

function showProfileScreen(user) {
    hideElement('main-container');
    showElement('profile-dashboard', 'flex');
    document.getElementById('profile-name').value = user.name || '';
    document.getElementById('profile-surname').value = user.surname || '';
    document.getElementById('profile-birthdate').value = user.birthdate || '';
    document.getElementById('profile-phone').value = user.phone || '';
    document.getElementById('profile-email').value = user.email || '';
    document.getElementById('profile-messenger').value = user.messenger || '';
}

function showDashboard(role) {
    hideElement('main-container');
    showElement('dashboard', 'block');
    setLanguage(currentLanguage);
}

function toggleEditProfile() {
    const fields = document.querySelectorAll('.profile-field');
    const editBtn = document.getElementById('edit-profile-btn');
    const saveBtn = document.getElementById('save-profile-btn');
    const isEditable = editBtn.textContent === translations[currentLanguage].edit_profile_button;
    
    fields.forEach(field => {
        field.readOnly = !isEditable;
        if (isEditable) {
            field.classList.add('editable');
        } else {
            field.classList.remove('editable');
        }
    });

    if (isEditable) {
        editBtn.style.display = 'none';
        saveBtn.style.display = 'block';
    } else {
        editBtn.style.display = 'block';
        saveBtn.style.display = 'none';
    }
}

function saveProfile() {
    // В реальном приложении здесь будет отправка данных на сервер
    // Для демонстрации просто переключаем обратно
    toggleEditProfile();
    alert('Профиль сохранен!');
}

function changePassword() {
    // Здесь будет логика для сменя пароля
    closeModal('profile-dashboard');
    showModal('change-password-modal');
}

function openPolicyPopup() {
    document.getElementById('policy-pdf-iframe').src = 'policy.pdf';
    showModal('policy-pdf-modal');
}

document.addEventListener('DOMContentLoaded', () => {
    // Event listeners for language cards
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseover', () => {
            const lang = card.dataset.lang;
            document.getElementById('welcome').innerHTML = translations[lang].welcome;
        });
        card.addEventListener('mouseout', () => {
            document.getElementById('welcome').innerHTML = translations[currentLanguage].welcome;
        });
    });

    document.getElementById('lang-ru-button').addEventListener('click', () => {
        setLanguage('ru');
        showModal('role-modal');
    });
    document.getElementById('lang-zh-button').addEventListener('click', () => {
        setLanguage('zh');
        showModal('role-modal');
    });
    document.getElementById('lang-ar-button').addEventListener('click', () => {
        setLanguage('ar');
        showModal('role-modal');
    });
    document.getElementById('lang-en-button').addEventListener('click', () => {
        setLanguage('en');
        showModal('login-modal');
    });
    
    document.getElementById('register-link-from-login').addEventListener('click', () => {
        closeModal('login-modal');
        showModal('role-modal');
    });
    
    document.getElementById('role-curator-btn').addEventListener('click', () => handleRoleSelection('curator'));
    document.getElementById('role-volunteer-btn').addEventListener('click', () => handleRoleSelection('volunteer'));
    document.getElementById('role-participant-btn').addEventListener('click', () => handleRoleSelection('participant'));
    
    document.getElementById('submit-key-button').addEventListener('click', handleSecretKeySubmit);
    document.getElementById('no-key-button').addEventListener('click', handleNoKey);
    
    document.getElementById('registration-form').addEventListener('submit', handleRegistration);
    
    document.getElementById('login-button').addEventListener('click', handleLogin);
    
    document.getElementById('edit-profile-btn').addEventListener('click', toggleEditProfile);
    document.getElementById('save-profile-btn').addEventListener('click', saveProfile);
    document.getElementById('change-password-btn').addEventListener('click', changePassword);

    // Обработчик для ссылки политики
    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('policy-link')) {
            e.preventDefault();
            openPolicyPopup();
        }
    });

    // Функции для закрытия модальных окон
    function setupModalClosers() {
        const closeButtons = document.querySelectorAll('.modal .close');
        closeButtons.forEach(btn => {
            btn.onclick = () => closeModal(btn.closest('.modal').id);
        });
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.addEventListener('click', function(event) {
                if (event.target === this) {
                    closeModal(this.id);
                }
            });
        });
        
        // Закрытие модального окна PDF
        document.getElementById('policy-pdf-modal-close-btn').onclick = () => {
            closeModal('policy-pdf-modal');
            document.getElementById('policy-pdf-iframe').src = '';
        };
    }

    datePickerInstance = flatpickr("#birthdate", {
        dateFormat: "Y-m-d",
        locale: translations[currentLanguage].flatpickr_locale
    });
    setLanguage('ru');
    setupModalClosers();
});