// locals.js

const curatorCodes = ["1234", "5678", "9101"];

// База данных кураторов для проверки (имитация)
const curatorDatabase = [
    { name: "John", surname: "Doe", country: "USA", city: "New York", birthdate: "1990-01-01", code: "1234" },
    { name: "Jane", surname: "Smith", country: "Canada", city: "Toronto", birthdate: "1985-05-15", code: "5678" }
];

const translations = {
    ru: {
        welcome: '<strong>ДОБРО ПОЖАЛОВАТЬ НА ЭКОДИКТАНТ. <br> ДЛЯ НАЧАЛА, ДАВАЙТЕ, ОПРЕДЕЛИМСЯ НА КАКОМ ЯЗЫКЕ ВАМ УДОБНО ОБЩАТЬСЯ</strong>',
        account_title: 'У вас уже есть аккаунт?',
        account_yes_button: 'Да, войти',
        account_no_button: 'Нет, зарегистрироваться',
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
        password: 'Пароль',
        confirm_password: 'Подтвердите пароль',
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
        invalid_phone: 'Неверный формат номера телефона. Для России: +7XXXXXXXXXX',
        invalid_email: 'Неверный адрес электронной почты.',
        invalid_code: 'Неверный код. Попробуйте еще раз.',
        validation_error: 'Пожалуйста, заполните все обязательные поля корректно.',
        login_error: 'Неверный адрес электронной почты или пароль.',
        incorrect_current_password: 'Неверный текущий пароль.',
        passwords_do_not_match: 'Пароли не совпадают.',
        password_changed_success: 'Пароль успешно изменен!',
        password_rules_error: 'Пароль должен содержать минимум 8 символов, одну заглавную и одну строчную букву, только латинские буквы и цифры.',
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
        consent_error: 'Вы должны принять политику обработки персональных данных',
        curator_thanks: 'Большое спасибо за Ваше желание развивать ЭкоДиктант',
        curator_platform_info: 'Укажите пожалуйста информацию о Вашей площадке:',
        curator_country: 'Страна',
        curator_city: 'Город (населенный пункт)',
        curator_attendance: 'Планируемая посещаемость площадки в дни проведения ЭкоДиктанта',
        curator_volunteers: 'планируемая численность привлекаемых волонтеров',
        curator_contact_person: 'Контактное лицо',
        curator_contact_phone: 'контактный телефон',
        curator_contact_email: 'контактная электронная почта',
        curator_contact_messenger: 'контактный мессенджер',
        curator_submit_platform: 'Отправить',
        curator_pending_message: 'Мы приняли Вашу заявку в обработку. В ближайшее время с Вами свяжутся для согласования деталей проведения ЭкоДиктанта на Вашей площадке.',
        curator_materials_title: 'Материалы для куратора',
        curator_platform_rules: 'правила оформления площадки',
        curator_print_materials: 'материалы для печати',
        curator_distribution_materials: 'материалы для раздачи',
        curator_questions: 'вопросы экодиктанта этого года',
        curator_answers: 'правильные ответы на вопросы к диктанту',
        curator_volunteer_rules: 'правила привлечения волонтеров',
        curator_certificate_participant: 'шаблон сертификата участника',
        curator_certificate_winner: 'шаблон сертификата победителя площадки',
        curator_certificate_success: 'шаблон участника, который прошел диктант с положительным результатом'
    },
    en: {
        welcome: '<strong>WELCOME TO THE ECO-DICTATION. <br> TO BEGIN, LET\'S DECIDE WHICH LANGUAGE IS CONVENIENT FOR YOU TO COMMUNICATE IN</strong>',
        account_title: 'Do you already have an account?',
        account_yes_button: 'Yes, sign in',
        account_no_button: 'No, sign up',
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
        password: 'Password',
        confirm_password: 'Confirm password',
        register_button: 'REGISTER',
        secret_code: 'Secret Key',
        no_secret_key: 'I don\'t have a key',
        submit_key: 'Submit',
        change_password_title: 'Change Password',
        current_password_label: 'Current password',
        new_password_label: 'New password',
        confirm_new_password_label: 'Confirm new password',
        change_password_button: 'Change Password',
        name_error: 'Name should contain only letters, spaces, or hyphens.',
        birthdate_future_error: 'Birthdate cannot be in the future.',
        birthdate_range_error: 'Please enter a valid birth year (1900-2020).',
        invalid_phone: 'Invalid phone number format.',
        invalid_email: 'Invalid email address.',
        invalid_code: 'Invalid code. Try again.',
        validation_error: 'Please fill all required fields correctly.',
        login_error: 'Invalid email or password.',
        incorrect_current_password: 'Incorrect current password.',
        passwords_do_not_match: 'Passwords do not match.',
        password_changed_success: 'Password changed successfully!',
        password_rules_error: 'Password must contain at least 8 characters, one uppercase and one lowercase letter, only Latin letters and digits.',
        dashboard_title: 'Dashboard',
        welcome_user: 'Welcome,',
        participant_message: 'The standard Eco-Dictation format is available for you. Click the button to start.',
        start_dictant: 'Start Eco-Dictation',
        curator_success_title: 'Authorization successful!',
        curator_message: 'Access approved. You can download the necessary documents and materials below.',
        curator_wait_message: 'Registration request sent!',
        curator_pending_details: 'We will contact you using the provided contacts after approving your application. Please wait.',
        volunteer_message: 'You can organize your own event. To upload documents, please wait for confirmation from the curator.',
        organize_event: 'Organize Event',
        curator_success_message: 'Access approved!',
        documents_title: 'Documents to Fill',
        materials_title: 'Working Materials',
        flatpickr_locale: 'default',
        dir: 'ltr',
        registration_success: 'Registration completed successfully!',
        profile_title: 'Dashboard',
        profile_name_label: 'First Name:',
        profile_surname_label: 'Last Name:',
        profile_birthdate_label: 'Date of Birth:',
        profile_phone_label: 'Phone:',
        profile_email_label: 'Email:',
        profile_messenger_label: 'Messenger:',
        edit_profile_button: 'EDIT',
        save_profile_button: 'SAVE',
        consent_text: 'By clicking register, I confirm that I have read the <a href="#" class="policy-link">personal data processing policy</a>.',
        consent_error: 'You must accept the personal data processing policy',
        curator_thanks: 'Thank you very much for your desire to develop EcoDictation',
        curator_platform_info: 'Please provide information about your platform:',
        curator_country: 'Country',
        curator_city: 'City (settlement)',
        curator_attendance: 'Planned attendance of the platform during EcoDictation days',
        curator_volunteers: 'Planned number of volunteers to be attracted',
        curator_contact_person: 'Contact person',
        curator_contact_phone: 'Contact phone',
        curator_contact_email: 'Contact email',
        curator_contact_messenger: 'Contact messenger',
        curator_submit_platform: 'Submit',
        curator_pending_message: 'We have accepted your application for processing. We will contact you shortly to coordinate the details of conducting EcoDictation on your platform.',
        curator_materials_title: 'Materials for curator',
        curator_platform_rules: 'platform design rules',
        curator_print_materials: 'materials for printing',
        curator_distribution_materials: 'materials for distribution',
        curator_questions: 'eco-dictation questions this year',
        curator_answers: 'correct answers to dictation questions',
        curator_volunteer_rules: 'rules for attracting volunteers',
        curator_certificate_participant: 'participant certificate template',
        curator_certificate_winner: 'platform winner certificate template',
        curator_certificate_success: 'template for participant who passed the dictation with positive result'
    },
    zh: {
        welcome: '<strong>欢迎来到生态听写。<br>首先，让我们确定您方便使用的语言</strong>',
        account_title: '您已经有账户吗？',
        account_yes_button: '是的, 登录',
        account_no_button: '没有, 注册',
        login_title: '您已经有现有的个人账户吗？',
        login_email_placeholder: '电子邮件',
        login_password_placeholder: '密码',
        login_button: '登录',
        login_register_link: '注册',
        role_welcome: '现在让我们确定您想在我们项目中扮演什么角色',
        curator: '策展人',
        volunteer: '志愿者',
        participant: '参与者',
        registration_title: '注册',
        name: '名字 *',
        surname: '姓氏 *',
        birthdate: '出生日期 *',
        phone: '电话号码 *',
        email: '电子邮件 *',
        messenger: '信使',
        password: '密码',
        confirm_password: '确认密码',
        register_button: '注册',
        secret_code: '秘密密钥',
        no_secret_key: '我没有钥匙',
        submit_key: '提交',
        change_password_title: '更改密码',
        current_password_label: '当前密码',
        new_password_label: '新密码',
        confirm_new_password_label: '确认新密码',
        change_password_button: '更改密码',
        name_error: '名称应仅包含字母、空格或连字符。',
        birthdate_future_error: '出生日期不能在未来。',
        birthdate_range_error: '请输入有效的出生年份 (1900-2020)。',
        invalid_phone: '无效的电话号码格式。',
        invalid_email: '无效的电子邮件地址。',
        invalid_code: '无效代码。请重试。',
        validation_error: '请正确填写所有必填字段。',
        login_error: '无效的电子邮件或密码。',
        incorrect_current_password: '当前密码不正确。',
        passwords_do_not_match: '密码不匹配。',
        password_changed_success: '密码更改成功！',
        password_rules_error: '密码必须包含至少8个字符，一个大写字母和一个小写字母，仅拉丁字母和数字。',
        dashboard_title: '仪表板',
        welcome_user: '欢迎，',
        participant_message: '标准生态听写格式可用。点击按钮开始。',
        start_dictant: '开始生态听写',
        curator_success_title: '授权成功！',
        curator_message: '访问已批准。您可以在下面下载必要的文档和材料。',
        curator_wait_message: '注册请求已发送！',
        curator_pending_details: '我们将在批准您的申请后使用提供的联系方式与您联系。请等待。',
        volunteer_message: '您可以组织自己的活动。要上传文档，请等待策展人的确认。',
        organize_event: '组织活动',
        curator_success_message: '访问已批准！',
        documents_title: '要填写的文档',
        materials_title: '工作材料',
        flatpickr_locale: 'zh',
        dir: 'ltr',
        registration_success: '注册成功完成！',
        profile_title: '仪表板',
        profile_name_label: '名字：',
        profile_surname_label: '姓氏：',
        profile_birthdate_label: '出生日期：',
        profile_phone_label: '电话：',
        profile_email_label: '电子邮件：',
        profile_messenger_label: '信使：',
        edit_profile_button: '编辑',
        save_profile_button: '保存',
        consent_text: '点击注册，我确认我已阅读 <a href="#" class="policy-link">个人数据处理政策</a>。',
        consent_error: '您必须接受个人数据处理政策',
        curator_thanks: '非常感谢您发展EcoDictation的愿望',
        curator_platform_info: '请提供您的平台信息：',
        curator_country: '国家',
        curator_city: '城市 (定居点)',
        curator_attendance: 'EcoDictation期间平台的预计出席率',
        curator_volunteers: '预计吸引志愿者的数量',
        curator_contact_person: '联系人',
        curator_contact_phone: '联系电话',
        curator_contact_email: '联系电子邮件',
        curator_contact_messenger: '联系信使',
        curator_submit_platform: '提交',
        curator_pending_message: '我们已接受您的申请进行处理。我们将很快与您联系，以协调在您的平台上进行EcoDictation的细节。',
        curator_materials_title: '策展人材料',
        curator_platform_rules: '平台设计规则',
        curator_print_materials: '打印材料',
        curator_distribution_materials: '分发材料',
        curator_questions: '今年生态听写问题',
        curator_answers: '听写问题的正确答案',
        curator_volunteer_rules: '吸引志愿者的规则',
        curator_certificate_participant: '参与者证书模板',
        curator_certificate_winner: '平台获胜者证书模板',
        curator_certificate_success: '以积极结果通过听写的参与者模板'
    },
    ar: {
        welcome: '<strong>مرحبا بك في الإملاء البيئي. <br> للبدء، دعونا نقرر أي لغة مريحة لك للتواصل</strong>',
        account_title: 'هل لديك حساب بالفعل؟',
        account_yes_button: 'نعم، تسجيل الدخول',
        account_no_button: 'لا، التسجيل',
        login_title: 'هل لديك حساب شخصي موجود بالفعل؟',
        login_email_placeholder: 'البريد الإلكتروني',
        login_password_placeholder: 'كلمة المرور',
        login_button: 'تسجيل الدخول',
        login_register_link: 'تسجيل',
        role_welcome: 'الآن دعونا نحدد الدور الذي تريد أن تلعبه في مشروعنا',
        curator: 'منسق',
        volunteer: 'متطوع',
        participant: 'مشارك',
        registration_title: 'تسجيل',
        name: 'الاسم *',
        surname: 'اللقب *',
        birthdate: 'تاريخ الميلاد *',
        phone: 'رقم الهاتف *',
        email: 'البريد الإلكتروني *',
        messenger: 'الرسول',
        password: 'كلمة المرور',
        confirm_password: 'تأكيد كلمة المرور',
        register_button: 'تسجيل',
        secret_code: 'المفتاح السري',
        no_secret_key: 'ليس لدي مفتاح',
        submit_key: 'إرسال',
        change_password_title: 'تغيير كلمة المرور',
        current_password_label: 'كلمة المرور الحالية',
        new_password_label: 'كلمة المرور الجديدة',
        confirm_new_password_label: 'تأكيد كلمة المرور الجديدة',
        change_password_button: 'تغيير كلمة المرور',
        name_error: 'يجب أن يحتوي الاسم على حروف فقط، مسافات أو شرطات.',
        birthdate_future_error: 'لا يمكن أن يكون تاريخ الميلاد في المستقبل.',
        birthdate_range_error: 'يرجى إدخال سنة ميلاد صالحة (1900-2020).',
        invalid_phone: 'صيغة رقم هاتف غير صالحة.',
        invalid_email: 'عنوان بريد إلكتروني غير صالح.',
        invalid_code: 'رمز غير صالح. حاول مرة أخرى.',
        validation_error: 'يرجى ملء جميع الحقول المطلوبة بشكل صحيح.',
        login_error: 'بريد إلكتروني أو كلمة مرور غير صالحة.',
        incorrect_current_password: 'كلمة المرور الحالية غير صحيحة.',
        passwords_do_not_match: 'كلمات المرور غير متطابقة.',
        password_changed_success: 'تم تغيير كلمة المرور بنجاح!',
        password_rules_error: 'يجب أن تحتوي كلمة المرور على ما لا يقل عن 8 رموز، حرف كبير واحد وحرف صغير واحد، فقط الحروف اللاتينية والأرقام.',
        dashboard_title: 'لوحة التحكم',
        welcome_user: 'مرحبا،',
        participant_message: 'الصيغة القياسية للإملاء البيئي متاحة لك. اضغط على الزر لبدء.',
        start_dictant: 'بدء الإملاء البيئي',
        curator_success_title: 'تم التفويض بنجاح!',
        curator_message: 'تمت الموافقة على الوصول. يمكنك تنزيل الوثائق والمواد اللازمة أدناه.',
        curator_wait_message: 'تم إرسال طلب التسجيل!',
        curator_pending_details: 'سنتصل بك باستخدام الاتصالات المقدمة بعد الموافقة على طلبك. يرجى الانتظار.',
        volunteer_message: 'يمكنك تنظيم حدثك الخاص. لتحميل الوثائق، يرجى الانتظار للتأكيد من المنسق.',
        organize_event: 'تنظيم حدث',
        curator_success_message: 'تمت الموافقة على الوصول!',
        documents_title: 'وثائق لملئها',
        materials_title: 'مواد العمل',
        flatpickr_locale: 'ar',
        dir: 'rtl',
        registration_success: 'تم الانتهاء من التسجيل بنجاح!',
        profile_title: 'لوحة التحكم',
        profile_name_label: 'الاسم:',
        profile_surname_label: 'اللقب:',
        profile_birthdate_label: 'تاريخ الميلاد:',
        profile_phone_label: 'الهاتف:',
        profile_email_label: 'البريد الإلكتروني:',
        profile_messenger_label: 'الرسول:',
        edit_profile_button: 'تحرير',
        save_profile_button: 'حفظ',
        consent_text: 'بالنقر على زر التسجيل، أؤكد أنني قد قرأت <a href="#" class="policy-link">سياسة معالجة البيانات الشخصية</a>.',
        consent_error: 'يجب عليك قبول سياسة معالجة البيانات الشخصية',
        curator_thanks: 'شكرا جزيلا على رغبتك في تطوير EcoDictation',
        curator_platform_info: 'يرجى تقديم معلومات عن منصتك:',
        curator_country: 'البلد',
        curator_city: 'المدينة (المستوطنة)',
        curator_attendance: 'الحضور المخطط للمنصة في أيام EcoDictation',
        curator_volunteers: 'عدد المتطوعين المخطط جذبها',
        curator_contact_person: 'شخص الاتصال',
        curator_contact_phone: 'هاتف الاتصال',
        curator_contact_email: 'البريد الإلكتروني للاتصال',
        curator_contact_messenger: 'الرسول للاتصال',
        curator_submit_platform: 'إرسال',
        curator_pending_message: 'لقد قبلنا طلبك للمعالجة. سنتصل بك قريبا لتنسيق تفاصيل إجراء EcoDictation على منصتك.',
        curator_materials_title: 'مواد للمنسق',
        curator_platform_rules: 'قواعد تصميم المنصة',
        curator_print_materials: 'مواد للطباعة',
        curator_distribution_materials: 'مواد للتوزيع',
        curator_questions: 'أسئلة الإملاء البيئي هذا العام',
        curator_answers: 'إجابات صحيحة على أسئلة الإملاء',
        curator_volunteer_rules: 'قواعد جذب المتطوعين',
        curator_certificate_participant: 'قالب شهادة المشارك',
        curator_certificate_winner: 'قالب شهادة فائز المنصة',
        curator_certificate_success: 'قالب للمشارك الذي اجتاز الإملاء بنتيجة إيجابية'
    }
};

let currentLanguage = 'ru';
let currentRole = '';
let datePickerInstance;
let hasSecretCode = false; // Флаг для секретного кода

// Функции для показа/скрытия элементов
function showElement(id, display = 'block') {
    document.getElementById(id).style.display = display;
}

function hideElement(id) {
    document.getElementById(id).style.display = 'none';
}

// Функции модальных окон
function showModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
    document.body.classList.add('no-scroll');
}

function closeModal(modalId) {
    hideElement(modalId);
    document.body.classList.remove('no-scroll');
}

// Установка языка
function setLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = translations[lang].dir;

    // Обновление текстов
    document.getElementById('welcome').innerHTML = translations[lang].welcome;
    document.getElementById('account-title').textContent = translations[lang].account_title;
    document.getElementById('account-yes-button').textContent = translations[lang].account_yes_button;
    document.getElementById('account-no-button').textContent = translations[lang].account_no_button;
    document.getElementById('login-title').textContent = translations[lang].login_title;
    document.getElementById('login-email').placeholder = translations[lang].login_email_placeholder;
    document.getElementById('login-password').placeholder = translations[lang].login_password_placeholder;
    document.getElementById('login-button').textContent = translations[lang].login_button;
    document.getElementById('register-link-from-login').textContent = translations[lang].login_register_link;
    document.getElementById('role-welcome-text').textContent = translations[lang].role_welcome;
    document.getElementById('curator-label').textContent = translations[lang].curator;
    document.getElementById('volunteer-label').textContent = translations[lang].volunteer;
    document.getElementById('participant-label').textContent = translations[lang].participant;
    document.getElementById('secret-key-title').textContent = translations[lang].secret_code;
    document.getElementById('secret-code-label').textContent = translations[lang].secret_code;
    document.getElementById('no-key-button').textContent = translations[lang].no_secret_key;
    document.getElementById('submit-key-button').textContent = translations[lang].submit_key;
    document.getElementById('registration-title').textContent = translations[lang].registration_title;
    document.getElementById('name-label').textContent = translations[lang].name;
    document.getElementById('surname-label').textContent = translations[lang].surname;
    document.getElementById('birthdate-label').textContent = translations[lang].birthdate;
    document.getElementById('phone-label').textContent = translations[lang].phone;
    document.getElementById('email-label').textContent = translations[lang].email;
    document.getElementById('messenger-label').textContent = translations[lang].messenger;
    document.getElementById('password-label').textContent = translations[lang].password;
    document.getElementById('confirm-password-label').textContent = translations[lang].confirm_password;
    document.getElementById('consent-text').innerHTML = translations[lang].consent_text;
    document.getElementById('register-button').textContent = translations[lang].register_button;

    // Обновление datepicker
    if (datePickerInstance) {
        datePickerInstance.destroy();
    }
    datePickerInstance = flatpickr("#birthdate", {
        dateFormat: "Y-m-d",
        locale: translations[lang].flatpickr_locale
    });
}

// Обработчик выбора роли
function handleRoleSelection(role) {
    currentRole = role;
    closeModal('role-modal');
    if (role === 'curator') {
        showModal('secret-key-modal');
    } else {
        hasSecretCode = false;
        showModal('registration-modal');
    }
}

// Обработчик секретного кода
function handleSecretKeySubmit() {
    const code = document.getElementById('secretCode').value;
    const error = document.getElementById('secret-code-error');
    if (curatorCodes.includes(code)) {
        hasSecretCode = true;
        closeModal('secret-key-modal');
        showModal('registration-modal');
    } else {
        error.textContent = translations[currentLanguage].invalid_code;
    }
}

function handleNoKey() {
    hasSecretCode = false;
    closeModal('secret-key-modal');
    showModal('registration-modal');
}

// Функция генерации рандомного пароля по правилам
function generateRandomPassword() {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';
    const allChars = lowercase + uppercase + digits;

    let password = '';
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += digits[Math.floor(Math.random() * digits.length)];

    for (let i = 3; i < 8; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Shuffle to make it random
    password = password.split('').sort(() => 0.5 - Math.random()).join('');
    return password;
}

// Функция для проверки пароля на соответствие правилам
function validatePassword(password) {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isLatinAndNumbers = /^[a-zA-Z0-9]+$/.test(password);

    if (password.length < minLength || !hasUppercase || !hasLowercase || !isLatinAndNumbers) {
        return translations[currentLanguage].password_rules_error;
    }
    return '';
}

// Валидация регистрации
function validateRegistration() {
    let valid = true;
    // Очистка ошибок
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    // Валидация имени и фамилии
    const nameRegex = /^[a-zA-Zа-яА-Я\s-]*$/;
    if (!nameRegex.test(document.getElementById('name').value)) {
        document.getElementById('name-error').textContent = translations[currentLanguage].name_error;
        valid = false;
    }
    if (!nameRegex.test(document.getElementById('surname').value)) {
        document.getElementById('surname-error').textContent = translations[currentLanguage].name_error;
        valid = false;
    }

    // Валидация даты рождения
    const birthdate = new Date(document.getElementById('birthdate').value);
    if (birthdate > new Date()) {
        document.getElementById('birthdate-error').textContent = translations[currentLanguage].birthdate_future_error;
        valid = false;
    } else if (birthdate.getFullYear() < 1900 || birthdate.getFullYear() > 2020) {
        document.getElementById('birthdate-error').textContent = translations[currentLanguage].birthdate_range_error;
        valid = false;
    }

    // Валидация телефона
    let phoneRegex = /^\+?\d{10,15}$/;
    if (currentLanguage === 'ru') {
        phoneRegex = /^\+7\d{10}$/;
    }
    if (!phoneRegex.test(document.getElementById('phone').value)) {
        document.getElementById('phone-error').textContent = translations[currentLanguage].invalid_phone;
        valid = false;
    }

    // Валидация email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(document.getElementById('email').value)) {
        document.getElementById('email-error').textContent = translations[currentLanguage].invalid_email;
        valid = false;
    }

    // Валидация пароля (если введен)
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    if (password || confirmPassword) {
        if (password !== confirmPassword) {
            document.getElementById('confirm-password-error').textContent = translations[currentLanguage].passwords_do_not_match;
            valid = false;
        }
        const passwordError = validatePassword(password);
        if (passwordError) {
            document.getElementById('password-error').textContent = passwordError;
            valid = false;
        }
    }

    // Согласие
    if (!document.getElementById('privacyPolicyConsent').checked) {
        document.getElementById('consent-error').textContent = translations[currentLanguage].consent_error;
        valid = false;
    }

    return valid;
}

// Обработчик регистрации
function handleRegistration(e) {
    e.preventDefault();

    if (!validateRegistration()) return;

    let password = document.getElementById('password').value;
    if (!password) {
        password = generateRandomPassword();
        alert(`Ваш сгенерированный пароль: ${password}. Запомните его!`);
    }

    // Сохранение пользователя
    const user = {
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        birthdate: document.getElementById('birthdate').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        messenger: document.getElementById('messenger').value,
        password: password,
        role: currentRole,
        hasSecretCode: hasSecretCode,
        platformStatus: hasSecretCode ? 'approved' : null // Для кураторов с кодом сразу approved
    };

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(user));

    closeModal('registration-modal');
    alert(translations[currentLanguage].registration_success);
    window.location.href = 'profile.html';
}

// Обработчик логина
function handleLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const error = document.getElementById('login-error');

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        closeModal('login-modal');
        window.location.href = 'profile.html';
    } else {
        error.textContent = translations[currentLanguage].login_error;
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    setLanguage('ru');

    // Hover для приветствия
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseover', () => {
            const lang = card.dataset.lang;
            document.getElementById('welcome').innerHTML = translations[lang].welcome;
        });
        card.addEventListener('mouseout', () => {
            document.getElementById('welcome').innerHTML = translations[currentLanguage].welcome;
        });
    });

    // Выбор языка и показ account-modal
    document.getElementById('lang-ru-button').addEventListener('click', () => {
        setLanguage('ru');
        showModal('account-modal');
    });
    document.getElementById('lang-zh-button').addEventListener('click', () => {
        setLanguage('zh');
        showModal('account-modal');
    });
    document.getElementById('lang-ar-button').addEventListener('click', () => {
        setLanguage('ar');
        showModal('account-modal');
    });
    document.getElementById('lang-en-button').addEventListener('click', () => {
        setLanguage('en');
        showModal('account-modal');
    });

    // Обработчики для account-modal
    document.getElementById('account-yes-button').addEventListener('click', () => {
        closeModal('account-modal');
        showModal('login-modal');
    });
    document.getElementById('account-no-button').addEventListener('click', () => {
        closeModal('account-modal');
        showModal('role-modal');
    });

    // Переход к регистрации из логина
    document.getElementById('register-link-from-login').addEventListener('click', () => {
        closeModal('login-modal');
        showModal('role-modal');
    });

    // Выбор роли
    document.getElementById('role-curator-btn').addEventListener('click', () => handleRoleSelection('curator'));
    document.getElementById('role-volunteer-btn').addEventListener('click', () => handleRoleSelection('volunteer'));
    document.getElementById('role-participant-btn').addEventListener('click', () => handleRoleSelection('participant'));

    // Секретный код
    document.getElementById('submit-key-button').addEventListener('click', handleSecretKeySubmit);
    document.getElementById('no-key-button').addEventListener('click', handleNoKey);

    // Регистрация
    document.getElementById('registration-form').addEventListener('submit', handleRegistration);

    // Логин
    document.getElementById('login-button').addEventListener('click', handleLogin);

    // Политика (PDF)
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('policy-link')) {
            e.preventDefault();
            document.getElementById('policy-pdf-iframe').src = 'policy.pdf';
            showModal('policy-pdf-modal');
        }
    });

    // Закрытие модалок
    document.querySelectorAll('.close').forEach(btn => {
        btn.addEventListener('click', () => closeModal(btn.closest('.modal').id));
    });
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal(modal.id);
        });
    });
});