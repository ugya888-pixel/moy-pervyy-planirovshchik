(() => {
  "use strict";

  const TRANSLATIONS = {
    ru: {
      "viewport.warning": "Для комфортной работы увеличьте окно минимум до 1280 px.",
      "brand.title": "Планировщик",
      "brand.caption": "Private workspace",
      "nav.overview": "Обзор",
      "nav.week": "Неделя",
      "nav.day": "День",
      "nav.ideal": "Идеальная неделя",
      "nav.search": "Поиск",
      "nav.settings": "Настройки",
      "nav.help": "Справка",
      "nav.collapse": "Свернуть",
      "nav.expand": "Развернуть",
      "topbar.workspace": "Личное пространство",
      "actions.today": "Сегодня",
      "actions.open": "Открыть",
      "actions.howItWorks": "Как это работает",
      "actions.understood": "Понятно",
      "actions.back": "Назад",
      "actions.next": "Далее",
      "actions.start": "Начать планирование",
      "actions.cancel": "Отмена",
      "actions.continue": "Продолжить",
      "actions.close": "Закрыть",
      "save.saving": "Сохранение…",
      "save.saved": "Сохранено",
      "save.error": "Ошибка сохранения",
      "overview.greetingMorning": "Доброе утро",
      "overview.greetingDay": "Добрый день",
      "overview.greetingEvening": "Добрый вечер",
      "overview.title": "Спокойная ясность на всю неделю",
      "overview.copy": "Здесь появится целостная картина ваших целей, привычек и расписания. Начните с недельного обзора.",
      "overview.openWeek": "Открыть неделю",
      "overview.progress": "Прогресс недели",
      "overview.goalsTitle": "Фокус недели",
      "overview.goalsEmpty": "Четыре главные цели помогут сохранить фокус на результате.",
      "overview.habitsTitle": "Ритм привычек",
      "overview.habitsEmpty": "Три привычки и семь спокойных отметок на каждую неделю.",
      "overview.dayTitle": "Сегодня",
      "overview.dayEmptyTitle": "День свободен",
      "overview.dayEmpty": "В расписании пока нет встреч и задач.",
      "metrics.goals": "Цели недели",
      "metrics.habits": "Привычки сегодня",
      "metrics.planned": "Запланировано",
      "metrics.free": "Свободное время",
      "week.word": "Неделя",
      "week.kicker": "Стратегический обзор",
      "week.title": "Неделя в одном фокусе",
      "week.goalPlaceholder": "Цель недели",
      "week.goalHint": "Место для результата и его декомпозиции.",
      "week.habitsTitle": "Полезные привычки",
      "week.emptyNote": "Неделя пока не заполнена. Здесь появятся четыре цели и три привычки.",
      "day.kickerToday": "Сегодня",
      "day.kickerSelected": "Выбранный день",
      "day.title": "План дня",
      "day.mainTasks": "Главные задачи",
      "day.otherTasks": "Остальные задачи",
      "day.time": "Время",
      "day.fixed": "Жёсткие встречи",
      "day.flexible": "Гибкие задачи",
      "ideal.kicker": "Постоянный шаблон",
      "ideal.title": "Архитектура идеальной недели",
      "ideal.emptyTitle": "Создайте эталонный ритм",
      "ideal.emptyCopy": "Постоянный шаблон поможет сравнивать планы с желаемой неделей.",
      "search.kicker": "Все недели",
      "search.title": "Найдите нужное мгновенно",
      "search.placeholder": "Задачи, цели, записи и хэштеги",
      "search.emptyTitle": "Пока искать нечего",
      "search.emptyCopy": "Когда в планировщике появятся данные, поиск соберёт их здесь.",
      "search.noResultsTitle": "Данных пока нет",
      "search.noResultsCopy": "Поиск готов. Результаты появятся после заполнения планировщика.",
      "settings.kicker": "Ваше пространство",
      "settings.title": "Настройки интерфейса",
      "settings.appearance": "Оформление",
      "settings.appearanceCopy": "Выберите подходящую тему.",
      "settings.theme": "Тема",
      "settings.language": "Язык",
      "settings.languageCopy": "Системные подписи на русском или английском.",
      "settings.sound": "Звук напоминаний",
      "settings.soundCopy": "По умолчанию выключен.",
      "settings.sidebar": "Боковая панель",
      "settings.sidebarCopy": "Компактный или полный вид.",
      "settings.toggleSidebar": "Изменить",
      "settings.onboarding": "Приветствие",
      "settings.onboardingCopy": "Посмотрите вводные экраны ещё раз.",
      "settings.restart": "Повторить приветствие",
      "theme.system": "Системная",
      "theme.light": "Светлая",
      "theme.dark": "Тёмная",
      "help.kicker": "Коротко и по делу",
      "help.title": "Как устроен планировщик",
      "help.overviewTitle": "Начните с обзора",
      "help.overviewCopy": "Обзор собирает ключевые показатели недели и сегодняшнего дня.",
      "help.weekTitle": "Сначала результат",
      "help.weekCopy": "Неделя держит четыре цели и три привычки в постоянном фокусе.",
      "help.dayTitle": "Затем время",
      "help.dayCopy": "День разделяет жёсткие встречи и гибкие задачи.",
      "help.privateTitle": "Данные остаются здесь",
      "help.privateCopy": "Планировщик хранит информацию только в браузере этого устройства.",
      "panel.guide": "Навигация по разделу",
      "panel.weekTitle": "О недельном обзоре",
      "panel.week.1.title": "Четыре результата",
      "panel.week.1.copy": "Каждая неделя получит ровно четыре цели с собственным прогрессом.",
      "panel.week.2.title": "Декомпозиция",
      "panel.week.2.copy": "У каждой цели появится список небольших выполнимых шагов.",
      "panel.week.3.title": "Три привычки",
      "panel.week.3.copy": "Ежедневные отметки помогут видеть ритм без лишней геймификации.",
      "panel.dayTitle": "О дневном плане",
      "panel.day.1.title": "Три главные задачи",
      "panel.day.1.copy": "Ограничение помогает сохранить настоящий фокус дня.",
      "panel.day.2.title": "Десять остальных",
      "panel.day.2.copy": "Второй список собирает важные, но не главные действия.",
      "panel.day.3.title": "Два типа времени",
      "panel.day.3.copy": "Встречи остаются жёсткими, а гибкие задачи можно перемещать.",
      "panel.idealTitle": "Об идеальной неделе",
      "panel.ideal.1.title": "Постоянный шаблон",
      "panel.ideal.1.copy": "Он не зависит от календарных дат и хранит желаемый ритм.",
      "panel.ideal.2.title": "Семь одинаково важных дней",
      "panel.ideal.2.copy": "Каждый день размечен с 06:00 до 24:00 с шагом 30 минут.",
      "panel.ideal.3.title": "Осознанное копирование",
      "panel.ideal.3.copy": "Шаблон можно будет вручную перенести в выбранную неделю.",
      "confirm.restartTitle": "Повторить приветствие?",
      "confirm.restartCopy": "Настройки и данные сохранятся. Откроются только три вводных экрана.",
      "onboarding.step": "Шаг {current} из 3",
      "onboarding.1.title": "Неделя, собранная вокруг главного",
      "onboarding.1.copy": "Четыре цели, три привычки и ясное расписание соединяются в одном спокойном рабочем пространстве.",
      "onboarding.2.title": "Ваши планы остаются вашими",
      "onboarding.2.copy": "Данные хранятся локально в этом браузере. Здесь нет аккаунта, облака или скрытой синхронизации.",
      "onboarding.3.title": "Настройте пространство под себя",
      "onboarding.3.copy": "Выберите язык, оформление и решите, нужен ли звук будущих напоминаний.",
      "toast.timezoneTitle": "Часовой пояс изменился",
      "toast.timezoneCopy": "Сегодня и календарь пересчитаны. Сохранённое локальное время событий не сдвигается.",
      "toast.storageTitle": "Настройки восстановлены безопасно",
      "toast.storageCopy": "Часть локальных настроек повреждена. Использованы значения по умолчанию.",
      "toast.saveErrorTitle": "Не удалось сохранить",
      "toast.saveErrorCopy": "Изменения остаются в этой вкладке. Проверьте доступ к локальному хранилищу.",
      "toast.settingsSaved": "Настройки обновлены",
      "aria.previousWeek": "Предыдущая неделя",
      "aria.nextWeek": "Следующая неделя",
      "aria.chooseDate": "Выбрать дату",
      "aria.changeTheme": "Сменить тему",
      "aria.changeLanguage": "Сменить язык",
      "aria.closePanel": "Закрыть панель",
      "aria.collapseSidebar": "Свернуть боковую панель",
      "aria.expandSidebar": "Развернуть боковую панель"
    },
    en: {
      "viewport.warning": "For comfortable work, increase the window to at least 1280 px.",
      "brand.title": "Planner",
      "brand.caption": "Private workspace",
      "nav.overview": "Overview",
      "nav.week": "Week",
      "nav.day": "Day",
      "nav.ideal": "Ideal week",
      "nav.search": "Search",
      "nav.settings": "Settings",
      "nav.help": "Help",
      "nav.collapse": "Collapse",
      "nav.expand": "Expand",
      "topbar.workspace": "Personal workspace",
      "actions.today": "Today",
      "actions.open": "Open",
      "actions.howItWorks": "How it works",
      "actions.understood": "Got it",
      "actions.back": "Back",
      "actions.next": "Next",
      "actions.start": "Start planning",
      "actions.cancel": "Cancel",
      "actions.continue": "Continue",
      "actions.close": "Close",
      "save.saving": "Saving…",
      "save.saved": "Saved",
      "save.error": "Save error",
      "overview.greetingMorning": "Good morning",
      "overview.greetingDay": "Good afternoon",
      "overview.greetingEvening": "Good evening",
      "overview.title": "Calm clarity for the entire week",
      "overview.copy": "Your goals, habits and schedule will come together here. Begin with the weekly overview.",
      "overview.openWeek": "Open the week",
      "overview.progress": "Week progress",
      "overview.goalsTitle": "Weekly focus",
      "overview.goalsEmpty": "Four essential goals help keep the focus on outcomes.",
      "overview.habitsTitle": "Habit rhythm",
      "overview.habitsEmpty": "Three habits and seven calm check-ins for every week.",
      "overview.dayTitle": "Today",
      "overview.dayEmptyTitle": "Your day is open",
      "overview.dayEmpty": "There are no meetings or tasks in the schedule yet.",
      "metrics.goals": "Weekly goals",
      "metrics.habits": "Habits today",
      "metrics.planned": "Planned",
      "metrics.free": "Free time",
      "week.word": "Week",
      "week.kicker": "Strategic overview",
      "week.title": "One week, one clear focus",
      "week.goalPlaceholder": "Weekly goal",
      "week.goalHint": "A place for the outcome and its next steps.",
      "week.habitsTitle": "Useful habits",
      "week.emptyNote": "This week is empty. Four goals and three habits will appear here.",
      "day.kickerToday": "Today",
      "day.kickerSelected": "Selected day",
      "day.title": "Daily plan",
      "day.mainTasks": "Main tasks",
      "day.otherTasks": "Other tasks",
      "day.time": "Time",
      "day.fixed": "Fixed meetings",
      "day.flexible": "Flexible tasks",
      "ideal.kicker": "Permanent template",
      "ideal.title": "The architecture of an ideal week",
      "ideal.emptyTitle": "Create your reference rhythm",
      "ideal.emptyCopy": "A permanent template helps compare plans with the week you want.",
      "search.kicker": "Every week",
      "search.title": "Find what matters instantly",
      "search.placeholder": "Tasks, goals, notes and hashtags",
      "search.emptyTitle": "Nothing to search yet",
      "search.emptyCopy": "Once the planner has data, search will bring it together here.",
      "search.noResultsTitle": "There is no data yet",
      "search.noResultsCopy": "Search is ready. Results will appear after you fill the planner.",
      "settings.kicker": "Your workspace",
      "settings.title": "Interface settings",
      "settings.appearance": "Appearance",
      "settings.appearanceCopy": "Choose the theme that feels right.",
      "settings.theme": "Theme",
      "settings.language": "Language",
      "settings.languageCopy": "System labels in Russian or English.",
      "settings.sound": "Reminder sound",
      "settings.soundCopy": "Off by default.",
      "settings.sidebar": "Sidebar",
      "settings.sidebarCopy": "Compact or full view.",
      "settings.toggleSidebar": "Change",
      "settings.onboarding": "Welcome guide",
      "settings.onboardingCopy": "View the three introduction screens again.",
      "settings.restart": "Replay welcome guide",
      "theme.system": "System",
      "theme.light": "Light",
      "theme.dark": "Dark",
      "help.kicker": "Brief and useful",
      "help.title": "How the planner works",
      "help.overviewTitle": "Start with Overview",
      "help.overviewCopy": "Overview brings together the essential signals for the week and today.",
      "help.weekTitle": "Outcome comes first",
      "help.weekCopy": "The week keeps four goals and three habits in clear focus.",
      "help.dayTitle": "Then place your time",
      "help.dayCopy": "The day separates fixed meetings from flexible tasks.",
      "help.privateTitle": "Your data stays here",
      "help.privateCopy": "The planner stores information only in this device's browser.",
      "panel.guide": "Section guide",
      "panel.weekTitle": "About the weekly overview",
      "panel.week.1.title": "Four outcomes",
      "panel.week.1.copy": "Every week has exactly four goals with their own progress.",
      "panel.week.2.title": "Break it down",
      "panel.week.2.copy": "Each goal will have a list of small, achievable steps.",
      "panel.week.3.title": "Three habits",
      "panel.week.3.copy": "Daily marks reveal your rhythm without unnecessary gamification.",
      "panel.dayTitle": "About the daily plan",
      "panel.day.1.title": "Three main tasks",
      "panel.day.1.copy": "The limit preserves a genuine focus for the day.",
      "panel.day.2.title": "Ten other tasks",
      "panel.day.2.copy": "The second list holds important work outside the main focus.",
      "panel.day.3.title": "Two kinds of time",
      "panel.day.3.copy": "Meetings stay fixed while flexible tasks can move.",
      "panel.idealTitle": "About the ideal week",
      "panel.ideal.1.title": "A permanent template",
      "panel.ideal.1.copy": "It is independent of calendar dates and keeps your preferred rhythm.",
      "panel.ideal.2.title": "Seven equally important days",
      "panel.ideal.2.copy": "Every day runs from 06:00 to 24:00 in 30-minute steps.",
      "panel.ideal.3.title": "Intentional copying",
      "panel.ideal.3.copy": "You will be able to copy the template into a chosen week manually.",
      "confirm.restartTitle": "Replay the welcome guide?",
      "confirm.restartCopy": "Your settings and data stay intact. Only the three introduction screens will open.",
      "onboarding.step": "Step {current} of 3",
      "onboarding.1.title": "A week built around what matters",
      "onboarding.1.copy": "Four goals, three habits and a clear schedule come together in one calm workspace.",
      "onboarding.2.title": "Your plans remain yours",
      "onboarding.2.copy": "Data is stored locally in this browser. There is no account, cloud or hidden synchronisation.",
      "onboarding.3.title": "Make the workspace your own",
      "onboarding.3.copy": "Choose a language and theme, then decide whether future reminders should make a sound.",
      "toast.timezoneTitle": "Time zone changed",
      "toast.timezoneCopy": "Today and the calendar were recalculated. Saved local event times do not move.",
      "toast.storageTitle": "Settings restored safely",
      "toast.storageCopy": "Some local settings were damaged. Default values are being used.",
      "toast.saveErrorTitle": "Could not save",
      "toast.saveErrorCopy": "Changes remain in this tab. Check access to local browser storage.",
      "toast.settingsSaved": "Settings updated",
      "aria.previousWeek": "Previous week",
      "aria.nextWeek": "Next week",
      "aria.chooseDate": "Choose date",
      "aria.changeTheme": "Change theme",
      "aria.changeLanguage": "Change language",
      "aria.closePanel": "Close panel",
      "aria.collapseSidebar": "Collapse sidebar",
      "aria.expandSidebar": "Expand sidebar"
    }
  };

  const I18nService = {
    language: "ru",

    t(key, replacements = {}) {
      const source = TRANSLATIONS[this.language]?.[key] ?? TRANSLATIONS.ru[key] ?? key;
      return Object.entries(replacements).reduce(
        (result, [name, value]) => result.replaceAll(`{${name}}`, String(value)),
        source
      );
    },

    setLanguage(language) {
      this.language = language === "en" ? "en" : "ru";
      document.documentElement.lang = this.language;
      document.querySelectorAll("[data-i18n]").forEach((element) => {
        element.textContent = this.t(element.dataset.i18n);
      });
      document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
        element.placeholder = this.t(element.dataset.i18nPlaceholder);
      });
      document.title = this.language === "ru" ? "Премиальный планировщик" : "Premium Planner";
    }
  };

  const DateService = {
    pad(value) {
      return String(value).padStart(2, "0");
    },

    toISO(date) {
      return `${date.getFullYear()}-${this.pad(date.getMonth() + 1)}-${this.pad(date.getDate())}`;
    },

    fromISO(value) {
      const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value || "");
      if (!match) return null;
      const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
      return this.toISO(date) === value ? date : null;
    },

    todayISO() {
      return this.toISO(new Date());
    },

    addDays(date, amount) {
      const next = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      next.setDate(next.getDate() + amount);
      return next;
    },

    startOfWeek(date) {
      const day = date.getDay() || 7;
      return this.addDays(date, 1 - day);
    },

    weekNumber(date) {
      const utc = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
      const day = utc.getUTCDay() || 7;
      utc.setUTCDate(utc.getUTCDate() + 4 - day);
      const yearStart = new Date(Date.UTC(utc.getUTCFullYear(), 0, 1));
      return Math.ceil((((utc - yearStart) / 86400000) + 1) / 7);
    },

    weekDays(date) {
      const start = this.startOfWeek(date);
      return Array.from({ length: 7 }, (_, index) => this.addDays(start, index));
    },

    monthPart(date, language, style = "long") {
      return new Intl.DateTimeFormat(language === "ru" ? "ru-RU" : "en-US", { day: "numeric", month: style })
        .formatToParts(date)
        .find((part) => part.type === "month")?.value;
    },

    weekLabel(date, language) {
      const start = this.startOfWeek(date);
      const end = this.addDays(start, 6);
      const number = this.weekNumber(start);
      const sameMonth = start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear();
      let range;

      if (language === "ru") {
        range = sameMonth
          ? `${start.getDate()}–${end.getDate()} ${this.monthPart(end, language)} ${end.getFullYear()}`
          : `${start.getDate()} ${this.monthPart(start, language, "short")} – ${end.getDate()} ${this.monthPart(end, language, "short")} ${end.getFullYear()}`;
      } else {
        range = sameMonth
          ? `${this.monthPart(start, language, "short")} ${start.getDate()}–${end.getDate()}, ${end.getFullYear()}`
          : `${this.monthPart(start, language, "short")} ${start.getDate()} – ${this.monthPart(end, language, "short")} ${end.getDate()}, ${end.getFullYear()}`;
      }

      return `${I18nService.t("week.word")} ${number} · ${range}`;
    },

    dayHeading(date, language) {
      const locale = language === "ru" ? "ru-RU" : "en-US";
      const text = new Intl.DateTimeFormat(locale, { weekday: "long", day: "numeric", month: "long" }).format(date);
      return text.charAt(0).toUpperCase() + text.slice(1);
    },

    timeZone() {
      return Intl.DateTimeFormat().resolvedOptions().timeZone || "local";
    }
  };

  const StorageService = {
    keys: {
      meta: "premiumPlanner.meta",
      settings: "premiumPlanner.settings",
      ui: "premiumPlanner.ui",
      weekIndex: "premiumPlanner.weekIndex"
    },
    queue: new Map(),
    timer: null,
    faults: [],
    onStatus: () => {},
    onError: () => {},

    defaults() {
      const language = navigator.language?.toLowerCase().startsWith("ru") ? "ru" : "en";
      const now = new Date().toISOString();
      return {
        meta: {
          schemaVersion: 1,
          createdAt: now,
          updatedAt: now,
          onboardingCompleted: false,
          lastKnownTimeZone: DateService.timeZone()
        },
        settings: {
          theme: "system",
          language,
          soundEnabled: false,
          sidebarCollapsed: false
        },
        ui: {
          view: "overview",
          selectedDate: DateService.todayISO(),
          selectedWeek: DateService.toISO(DateService.startOfWeek(new Date()))
        }
      };
    },

    read(key, fallback) {
      let raw;
      try {
        raw = localStorage.getItem(key);
      } catch (error) {
        this.faults.push({ key, error });
        return structuredClone(fallback);
      }
      if (raw === null) return structuredClone(fallback);
      try {
        return JSON.parse(raw);
      } catch (error) {
        this.faults.push({ key, error });
        return structuredClone(fallback);
      }
    },

    initialize() {
      const defaults = this.defaults();
      const meta = this.read(this.keys.meta, defaults.meta);
      const settings = this.read(this.keys.settings, defaults.settings);
      this.read(this.keys.weekIndex, []);

      const safeSettings = {
        theme: ["system", "light", "dark"].includes(settings.theme) ? settings.theme : defaults.settings.theme,
        language: ["ru", "en"].includes(settings.language) ? settings.language : defaults.settings.language,
        soundEnabled: Boolean(settings.soundEnabled),
        sidebarCollapsed: Boolean(settings.sidebarCollapsed)
      };
      const safeMeta = {
        ...defaults.meta,
        ...meta,
        schemaVersion: 1,
        onboardingCompleted: Boolean(meta.onboardingCompleted)
      };
      const ui = defaults.ui;

      this.seedMissing(this.keys.meta, safeMeta);
      this.seedMissing(this.keys.settings, safeSettings);
      this.seedMissing(this.keys.ui, ui);
      this.seedMissing(this.keys.weekIndex, []);

      return { meta: safeMeta, settings: safeSettings, ui };
    },

    seedMissing(key, value) {
      try {
        if (localStorage.getItem(key) === null) localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        this.faults.push({ key, error });
      }
    },

    schedule(key, value) {
      this.queue.set(key, structuredClone(value));
      this.onStatus("saving");
      clearTimeout(this.timer);
      this.timer = window.setTimeout(() => this.flush(), 220);
    },

    flush() {
      if (!this.queue.size) return true;
      clearTimeout(this.timer);
      this.timer = null;
      try {
        const pending = Array.from(this.queue.entries());
        pending.forEach(([key, value]) => localStorage.setItem(key, JSON.stringify(value)));
        this.queue.clear();
        this.onStatus("saved");
        return true;
      } catch (error) {
        this.onStatus("error");
        this.onError(error);
        return false;
      }
    }
  };

  const ThemeService = {
    media: window.matchMedia("(prefers-color-scheme: dark)"),

    effective(mode) {
      if (mode === "system") return this.media.matches ? "dark" : "light";
      return mode;
    },

    apply(mode) {
      document.documentElement.dataset.theme = this.effective(mode);
      document.documentElement.style.colorScheme = this.effective(mode);
    }
  };

  const AppController = {
    state: null,
    onboardingStep: 0,
    lastFocusedElement: null,
    confirmationAction: null,

    elements: {},

    start() {
      this.cacheElements();
      StorageService.onStatus = (status) => this.renderSaveStatus(status);
      StorageService.onError = () => this.showToast("toast.saveErrorTitle", "toast.saveErrorCopy", "error", 7000);
      this.state = StorageService.initialize();
      this.state.ui.view = "overview";
      this.state.ui.selectedDate = DateService.todayISO();
      this.state.ui.selectedWeek = DateService.toISO(DateService.startOfWeek(new Date()));

      I18nService.setLanguage(this.state.settings.language);
      ThemeService.apply(this.state.settings.theme);
      this.buildStaticPreviews();
      this.bindEvents();
      this.syncSettingsControls();
      this.applySidebarState(false);
      this.renderAll();
      this.elements.app.hidden = false;

      this.checkTimeZone();
      if (StorageService.faults.length) {
        window.setTimeout(() => this.showToast("toast.storageTitle", "toast.storageCopy", "error", 9000), 250);
      }

      if (!this.state.meta.onboardingCompleted) this.showOnboarding(0);
    },

    cacheElements() {
      const byId = (id) => document.getElementById(id);
      this.elements = {
        app: byId("app"),
        viewTitle: byId("viewTitle"),
        weekLabel: byId("weekLabel"),
        weekStrip: byId("weekStrip"),
        datePicker: byId("datePicker"),
        previousWeek: byId("previousWeek"),
        nextWeek: byId("nextWeek"),
        todayButton: byId("todayButton"),
        sidebarToggle: byId("sidebarToggle"),
        themeQuickToggle: byId("themeQuickToggle"),
        languageToggle: byId("languageToggle"),
        saveStatus: byId("saveStatus"),
        themeSelect: byId("themeSelect"),
        languageSelect: byId("languageSelect"),
        soundToggle: byId("soundToggle"),
        settingsSidebarToggle: byId("settingsSidebarToggle"),
        restartOnboarding: byId("restartOnboarding"),
        greeting: byId("greeting"),
        dayKicker: byId("dayKicker"),
        dayHeading: byId("dayHeading"),
        habitTablePlaceholder: byId("habitTablePlaceholder"),
        schedulePlaceholder: byId("schedulePlaceholder"),
        idealHead: byId("idealHead"),
        idealGridPlaceholder: byId("idealGridPlaceholder"),
        searchInput: byId("searchInput"),
        searchEmpty: byId("searchEmpty"),
        panelScrim: byId("panelScrim"),
        contextPanel: byId("contextPanel"),
        contextPanelTitle: byId("contextPanelTitle"),
        contextPanelBody: byId("contextPanelBody"),
        closeContextPanel: byId("closeContextPanel"),
        contextPanelDone: byId("contextPanelDone"),
        onboarding: byId("onboarding"),
        onboardingKicker: byId("onboardingKicker"),
        onboardingTitle: byId("onboardingTitle"),
        onboardingText: byId("onboardingText"),
        onboardingSettings: byId("onboardingSettings"),
        onboardingBack: byId("onboardingBack"),
        onboardingNext: byId("onboardingNext"),
        onboardingLanguage: byId("onboardingLanguage"),
        onboardingTheme: byId("onboardingTheme"),
        onboardingSound: byId("onboardingSound"),
        confirmDialog: byId("confirmDialog"),
        confirmCancel: byId("confirmCancel"),
        confirmAccept: byId("confirmAccept"),
        toastRegion: byId("toastRegion")
      };
    },

    buildStaticPreviews() {
      this.elements.habitTablePlaceholder.replaceChildren();
      for (let rowIndex = 0; rowIndex < 3; rowIndex += 1) {
        const row = document.createElement("div");
        row.className = "habit-row-placeholder";
        for (let cellIndex = 0; cellIndex < 8; cellIndex += 1) row.append(document.createElement("span"));
        this.elements.habitTablePlaceholder.append(row);
      }

      this.buildTimeGrid(this.elements.schedulePlaceholder, "schedule-row", 2);
      this.buildTimeGrid(this.elements.idealGridPlaceholder, "ideal-grid-row", 7);
    },

    buildTimeGrid(container, rowClass, contentColumns) {
      container.replaceChildren();
      for (let totalMinutes = 6 * 60; totalMinutes < 24 * 60; totalMinutes += 30) {
        const hour = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        const row = document.createElement("div");
        row.className = `${rowClass} ${minutes === 0 ? "is-first-half" : "is-second-half"}`;
        const time = document.createElement("span");
        time.className = "time-grid-label";
        time.textContent = minutes === 0 ? `${String(hour).padStart(2, "0")}:00` : "";
        row.append(time);
        for (let column = 0; column < contentColumns; column += 1) row.append(document.createElement("span"));
        container.append(row);
      }

      const endRow = document.createElement("div");
      endRow.className = `${rowClass} time-grid-end`;
      const endTime = document.createElement("span");
      endTime.className = "time-grid-label";
      endTime.textContent = "24:00";
      endRow.append(endTime);
      for (let column = 0; column < contentColumns; column += 1) endRow.append(document.createElement("span"));
      container.append(endRow);
    },

    bindEvents() {
      document.querySelectorAll("[data-view-target]").forEach((button) => {
        button.addEventListener("click", () => this.showView(button.dataset.viewTarget));
      });
      document.querySelectorAll("[data-navigate]").forEach((button) => {
        button.addEventListener("click", () => this.showView(button.dataset.navigate));
      });
      document.querySelectorAll("[data-panel]").forEach((button) => {
        button.addEventListener("click", () => this.openContextPanel(button.dataset.panel, button));
      });

      this.elements.previousWeek.addEventListener("click", () => this.moveWeek(-7));
      this.elements.nextWeek.addEventListener("click", () => this.moveWeek(7));
      this.elements.todayButton.addEventListener("click", () => this.selectDate(DateService.todayISO()));
      this.elements.datePicker.addEventListener("change", (event) => this.selectDate(event.target.value));
      this.elements.weekLabel.addEventListener("click", () => {
        if (typeof this.elements.datePicker.showPicker === "function") this.elements.datePicker.showPicker();
        else this.elements.datePicker.focus();
      });

      this.elements.sidebarToggle.addEventListener("click", () => this.toggleSidebar());
      this.elements.settingsSidebarToggle.addEventListener("click", () => this.toggleSidebar());
      this.elements.languageToggle.addEventListener("click", () => this.updateLanguage(this.state.settings.language === "ru" ? "en" : "ru"));
      this.elements.themeQuickToggle.addEventListener("click", () => {
        const next = ThemeService.effective(this.state.settings.theme) === "dark" ? "light" : "dark";
        this.updateTheme(next);
      });
      this.elements.themeSelect.addEventListener("change", (event) => this.updateTheme(event.target.value));
      this.elements.languageSelect.addEventListener("change", (event) => this.updateLanguage(event.target.value));
      this.elements.soundToggle.addEventListener("change", (event) => this.updateSound(event.target.checked));
      this.elements.searchInput.addEventListener("input", () => this.renderSearchState());

      this.elements.restartOnboarding.addEventListener("click", () => {
        this.openConfirmation(() => this.showOnboarding(0));
      });
      this.elements.confirmCancel.addEventListener("click", () => this.closeConfirmation());
      this.elements.confirmAccept.addEventListener("click", () => {
        const action = this.confirmationAction;
        this.closeConfirmation();
        action?.();
      });

      this.elements.closeContextPanel.addEventListener("click", () => this.closeContextPanel());
      this.elements.contextPanelDone.addEventListener("click", () => this.closeContextPanel());
      this.elements.panelScrim.addEventListener("click", () => this.closeContextPanel());

      this.elements.onboardingBack.addEventListener("click", () => this.renderOnboardingStep(this.onboardingStep - 1));
      this.elements.onboardingNext.addEventListener("click", () => {
        if (this.onboardingStep < 2) this.renderOnboardingStep(this.onboardingStep + 1);
        else this.finishOnboarding();
      });
      this.elements.onboardingLanguage.addEventListener("change", (event) => this.updateLanguage(event.target.value, false));
      this.elements.onboardingTheme.addEventListener("change", (event) => this.updateTheme(event.target.value, false));
      this.elements.onboardingSound.addEventListener("change", (event) => this.updateSound(event.target.checked, false));

      ThemeService.media.addEventListener("change", () => {
        if (this.state.settings.theme === "system") ThemeService.apply("system");
      });

      window.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") return;
        if (!this.elements.confirmDialog.hidden) this.closeConfirmation();
        else if (!this.elements.contextPanel.getAttribute("aria-hidden").includes("true")) this.closeContextPanel();
      });
      window.addEventListener("beforeunload", () => StorageService.flush());
    },

    renderAll() {
      I18nService.setLanguage(this.state.settings.language);
      this.renderWeekNavigation();
      this.renderGreeting();
      this.renderDayHeading();
      this.renderIdealHead();
      this.showView(this.state.ui.view, false);
      this.renderAriaLabels();
      this.renderSaveStatus("saved");
      this.syncSettingsControls();
    },

    renderWeekNavigation() {
      const selected = DateService.fromISO(this.state.ui.selectedDate) || new Date();
      const language = this.state.settings.language;
      const today = DateService.todayISO();
      this.elements.weekLabel.textContent = DateService.weekLabel(selected, language);
      this.elements.datePicker.value = DateService.toISO(selected);
      this.state.ui.selectedWeek = DateService.toISO(DateService.startOfWeek(selected));
      this.elements.weekStrip.replaceChildren();

      const locale = language === "ru" ? "ru-RU" : "en-US";
      DateService.weekDays(selected).forEach((date) => {
        const iso = DateService.toISO(date);
        const button = document.createElement("button");
        button.type = "button";
        button.className = "day-chip";
        button.classList.toggle("is-selected", iso === this.state.ui.selectedDate);
        button.classList.toggle("is-today", iso === today);
        button.setAttribute("aria-pressed", String(iso === this.state.ui.selectedDate));
        button.setAttribute("aria-label", DateService.dayHeading(date, language));
        const weekday = document.createElement("span");
        weekday.textContent = new Intl.DateTimeFormat(locale, { weekday: "short" }).format(date).replace(".", "");
        const day = document.createElement("strong");
        day.textContent = String(date.getDate());
        button.append(weekday, day);
        button.addEventListener("click", () => this.selectDate(iso));
        this.elements.weekStrip.append(button);
      });
    },

    renderGreeting() {
      const hour = new Date().getHours();
      const key = hour < 12 ? "overview.greetingMorning" : hour < 18 ? "overview.greetingDay" : "overview.greetingEvening";
      this.elements.greeting.textContent = I18nService.t(key);
    },

    renderDayHeading() {
      const date = DateService.fromISO(this.state.ui.selectedDate) || new Date();
      this.elements.dayKicker.textContent = I18nService.t(this.state.ui.selectedDate === DateService.todayISO() ? "day.kickerToday" : "day.kickerSelected");
      this.elements.dayHeading.textContent = DateService.dayHeading(date, this.state.settings.language);
    },

    renderIdealHead() {
      const language = this.state.settings.language;
      const locale = language === "ru" ? "ru-RU" : "en-US";
      const monday = DateService.startOfWeek(new Date(2026, 0, 5));
      this.elements.idealHead.replaceChildren();
      const time = document.createElement("span");
      time.textContent = I18nService.t("day.time");
      this.elements.idealHead.append(time);
      for (let index = 0; index < 7; index += 1) {
        const label = document.createElement("span");
        label.textContent = new Intl.DateTimeFormat(locale, { weekday: "short" }).format(DateService.addDays(monday, index)).replace(".", "");
        this.elements.idealHead.append(label);
      }
    },

    renderSearchState() {
      const hasQuery = this.elements.searchInput.value.trim().length > 0;
      const title = this.elements.searchEmpty.querySelector("h3");
      const copy = this.elements.searchEmpty.querySelector("p");
      title.textContent = I18nService.t(hasQuery ? "search.noResultsTitle" : "search.emptyTitle");
      copy.textContent = I18nService.t(hasQuery ? "search.noResultsCopy" : "search.emptyCopy");
    },

    renderAriaLabels() {
      this.elements.previousWeek.setAttribute("aria-label", I18nService.t("aria.previousWeek"));
      this.elements.nextWeek.setAttribute("aria-label", I18nService.t("aria.nextWeek"));
      this.elements.weekLabel.setAttribute("aria-label", I18nService.t("aria.chooseDate"));
      this.elements.datePicker.parentElement.setAttribute("aria-label", I18nService.t("aria.chooseDate"));
      this.elements.themeQuickToggle.setAttribute("aria-label", I18nService.t("aria.changeTheme"));
      this.elements.languageToggle.setAttribute("aria-label", I18nService.t("aria.changeLanguage"));
      this.elements.closeContextPanel.setAttribute("aria-label", I18nService.t("aria.closePanel"));
      this.elements.languageToggle.textContent = this.state.settings.language === "ru" ? "EN" : "RU";
      this.renderSidebarLabel();
    },

    renderSidebarLabel() {
      const collapsed = this.state.settings.sidebarCollapsed;
      this.elements.sidebarToggle.setAttribute("aria-expanded", String(!collapsed));
      this.elements.sidebarToggle.setAttribute("aria-label", I18nService.t(collapsed ? "aria.expandSidebar" : "aria.collapseSidebar"));
      const label = this.elements.sidebarToggle.querySelector("span");
      label.textContent = I18nService.t(collapsed ? "nav.expand" : "nav.collapse");
    },

    renderSaveStatus(status) {
      const key = status === "saving" ? "save.saving" : status === "error" ? "save.error" : "save.saved";
      this.elements.saveStatus.classList.toggle("is-saving", status === "saving");
      this.elements.saveStatus.classList.toggle("is-error", status === "error");
      this.elements.saveStatus.querySelector("span:last-child").textContent = I18nService.t(key);
    },

    showView(view, save = true) {
      const allowed = ["overview", "week", "day", "ideal", "search", "settings", "help"];
      const target = allowed.includes(view) ? view : "overview";
      this.state.ui.view = target;
      document.querySelectorAll(".view").forEach((section) => section.classList.toggle("is-active", section.dataset.view === target));
      document.querySelectorAll("[data-view-target]").forEach((button) => {
        const active = button.dataset.viewTarget === target;
        button.classList.toggle("is-active", active);
        if (active) button.setAttribute("aria-current", "page");
        else button.removeAttribute("aria-current");
      });
      this.elements.viewTitle.textContent = I18nService.t(`nav.${target}`);
      if (save) this.saveUI();
    },

    selectDate(iso) {
      const date = DateService.fromISO(iso);
      if (!date) return;
      this.state.ui.selectedDate = iso;
      this.state.ui.selectedWeek = DateService.toISO(DateService.startOfWeek(date));
      this.renderWeekNavigation();
      this.renderDayHeading();
      this.saveUI();
    },

    moveWeek(amount) {
      const date = DateService.fromISO(this.state.ui.selectedDate) || new Date();
      this.selectDate(DateService.toISO(DateService.addDays(date, amount)));
    },

    toggleSidebar() {
      this.state.settings.sidebarCollapsed = !this.state.settings.sidebarCollapsed;
      this.applySidebarState();
      this.syncSettingsControls();
      this.saveSettings();
    },

    applySidebarState(renderLabel = true) {
      this.elements.app.classList.toggle("sidebar-collapsed", this.state.settings.sidebarCollapsed);
      if (renderLabel) this.renderSidebarLabel();
    },

    updateTheme(theme, save = true) {
      this.state.settings.theme = ["system", "light", "dark"].includes(theme) ? theme : "system";
      ThemeService.apply(this.state.settings.theme);
      this.syncSettingsControls();
      if (save) this.saveSettings();
    },

    updateLanguage(language, save = true) {
      this.state.settings.language = language === "en" ? "en" : "ru";
      this.renderAll();
      if (!this.elements.onboarding.hidden) this.renderOnboardingStep(this.onboardingStep);
      if (save) this.saveSettings();
    },

    updateSound(enabled, save = true) {
      this.state.settings.soundEnabled = Boolean(enabled);
      this.syncSettingsControls();
      if (save) this.saveSettings();
    },

    syncSettingsControls() {
      this.elements.themeSelect.value = this.state.settings.theme;
      this.elements.languageSelect.value = this.state.settings.language;
      this.elements.soundToggle.checked = this.state.settings.soundEnabled;
      this.elements.onboardingTheme.value = this.state.settings.theme;
      this.elements.onboardingLanguage.value = this.state.settings.language;
      this.elements.onboardingSound.checked = this.state.settings.soundEnabled;
    },

    saveSettings() {
      StorageService.schedule(StorageService.keys.settings, this.state.settings);
      this.touchMeta();
    },

    saveUI() {
      StorageService.schedule(StorageService.keys.ui, this.state.ui);
      this.touchMeta();
    },

    touchMeta() {
      this.state.meta.updatedAt = new Date().toISOString();
      StorageService.schedule(StorageService.keys.meta, this.state.meta);
    },

    checkTimeZone() {
      const current = DateService.timeZone();
      if (this.state.meta.lastKnownTimeZone && this.state.meta.lastKnownTimeZone !== current) {
        this.state.meta.lastKnownTimeZone = current;
        this.touchMeta();
        this.showToast("toast.timezoneTitle", "toast.timezoneCopy", "info", 8000);
      } else if (!this.state.meta.lastKnownTimeZone) {
        this.state.meta.lastKnownTimeZone = current;
        this.touchMeta();
      }
    },

    showOnboarding(step = 0) {
      this.onboardingStep = Math.max(0, Math.min(2, step));
      this.elements.onboarding.hidden = false;
      this.elements.app.setAttribute("aria-hidden", "true");
      this.elements.app.inert = true;
      this.syncSettingsControls();
      this.renderOnboardingStep(this.onboardingStep);
      window.setTimeout(() => this.elements.onboardingNext.focus(), 0);
    },

    renderOnboardingStep(step) {
      this.onboardingStep = Math.max(0, Math.min(2, step));
      const number = this.onboardingStep + 1;
      this.elements.onboardingKicker.textContent = I18nService.t("onboarding.step", { current: number });
      this.elements.onboardingTitle.textContent = I18nService.t(`onboarding.${number}.title`);
      this.elements.onboardingText.textContent = I18nService.t(`onboarding.${number}.copy`);
      this.elements.onboardingSettings.hidden = number !== 3;
      this.elements.onboardingBack.disabled = number === 1;
      this.elements.onboardingNext.querySelector("span").textContent = I18nService.t(number === 3 ? "actions.start" : "actions.next");
      document.querySelectorAll(".onboarding-progress span").forEach((item, index) => item.classList.toggle("is-active", index <= this.onboardingStep));
      document.querySelector(".visual-orbit strong").textContent = String(number).padStart(2, "0");
      this.syncSettingsControls();
    },

    finishOnboarding() {
      this.state.meta.onboardingCompleted = true;
      this.touchMeta();
      this.saveSettings();
      this.elements.onboarding.hidden = true;
      this.elements.app.removeAttribute("aria-hidden");
      this.elements.app.inert = false;
      this.showView("overview");
      document.querySelector('[data-view-target="overview"]').focus();
    },

    openContextPanel(type, trigger) {
      const types = ["week", "day", "ideal"];
      const target = types.includes(type) ? type : "week";
      this.lastFocusedElement = trigger || document.activeElement;
      this.elements.contextPanelTitle.textContent = I18nService.t(`panel.${target}Title`);
      const list = document.createElement("ol");
      list.className = "guide-list";
      for (let index = 1; index <= 3; index += 1) {
        const item = document.createElement("li");
        const number = document.createElement("span");
        number.textContent = String(index).padStart(2, "0");
        const copy = document.createElement("div");
        const title = document.createElement("strong");
        title.textContent = I18nService.t(`panel.${target}.${index}.title`);
        const text = document.createElement("p");
        text.textContent = I18nService.t(`panel.${target}.${index}.copy`);
        copy.append(title, text);
        item.append(number, copy);
        list.append(item);
      }
      this.elements.contextPanelBody.replaceChildren(list);
      this.elements.panelScrim.hidden = false;
      this.elements.contextPanel.classList.add("is-open");
      this.elements.contextPanel.setAttribute("aria-hidden", "false");
      document.querySelector(".sidebar").inert = true;
      document.querySelector(".workspace").inert = true;
      this.elements.closeContextPanel.focus();
    },

    closeContextPanel() {
      this.elements.contextPanel.classList.remove("is-open");
      this.elements.contextPanel.setAttribute("aria-hidden", "true");
      this.elements.panelScrim.hidden = true;
      document.querySelector(".sidebar").inert = false;
      document.querySelector(".workspace").inert = false;
      this.lastFocusedElement?.focus();
    },

    openConfirmation(action) {
      this.confirmationAction = action;
      this.lastFocusedElement = document.activeElement;
      this.elements.confirmDialog.hidden = false;
      this.elements.app.inert = true;
      this.elements.confirmCancel.focus();
    },

    closeConfirmation() {
      this.elements.confirmDialog.hidden = true;
      this.elements.app.inert = false;
      this.confirmationAction = null;
      this.lastFocusedElement?.focus();
    },

    showToast(titleKey, copyKey, type = "info", duration = 5000) {
      const toast = document.createElement("div");
      toast.className = `toast${type === "error" ? " is-error" : ""}`;
      toast.setAttribute("role", type === "error" ? "alert" : "status");
      const copy = document.createElement("div");
      const title = document.createElement("strong");
      title.textContent = I18nService.t(titleKey);
      const text = document.createElement("p");
      text.textContent = I18nService.t(copyKey);
      const close = document.createElement("button");
      close.type = "button";
      close.setAttribute("aria-label", I18nService.t("actions.close"));
      close.textContent = "×";
      close.addEventListener("click", () => toast.remove());
      copy.append(title, text);
      toast.append(copy, close);
      this.elements.toastRegion.append(toast);
      window.setTimeout(() => toast.remove(), duration);
    }
  };

  AppController.start();
})();
