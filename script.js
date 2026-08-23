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
      "day.flexible": "Гибкие дела",
      "ideal.kicker": "Выбранная календарная неделя",
      "ideal.title": "Архитектура идеальной недели",
      "ideal.emptyTitle": "Создайте эталонный ритм",
      "ideal.emptyCopy": "План этой недели не изменяет предыдущие и будущие недели.",
      "search.kicker": "Все недели",
      "search.title": "Найдите нужное мгновенно",
      "search.placeholder": "Задачи, цели, заметки и хэштеги",
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
      "help.dayCopy": "День разделяет жёсткие встречи и гибкие дела.",
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
      "panel.day.3.copy": "Встречи остаются жёсткими, а гибкие дела можно перемещать.",
      "panel.idealTitle": "Об идеальной неделе",
      "panel.ideal.1.title": "Отдельная неделя",
      "panel.ideal.1.copy": "Идеальная неделя относится только к выбранной календарной неделе.",
      "panel.ideal.2.title": "Семь одинаково важных дней",
      "panel.ideal.2.copy": "Каждый день размечен с 06:00 до 24:00 с шагом 30 минут.",
      "panel.ideal.3.title": "Осознанное копирование",
      "panel.ideal.3.copy": "Все элементы можно вручную скопировать в одну выбранную будущую идеальную неделю.",
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
      "ideal.kicker": "Selected calendar week",
      "ideal.title": "The architecture of an ideal week",
      "ideal.emptyTitle": "Create your reference rhythm",
      "ideal.emptyCopy": "This week's plan does not affect previous or future weeks.",
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
      "panel.ideal.1.title": "One calendar week",
      "panel.ideal.1.copy": "The ideal week belongs only to the selected calendar week.",
      "panel.ideal.2.title": "Seven equally important days",
      "panel.ideal.2.copy": "Every day runs from 06:00 to 24:00 in 30-minute steps.",
      "panel.ideal.3.title": "Intentional copying",
      "panel.ideal.3.copy": "All items can be copied manually into one selected future ideal week.",
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

  Object.assign(TRANSLATIONS.ru, {
    "nav.notes": "Заметки",
    "actions.addGoal": "Добавить цель",
    "actions.addHabit": "Добавить привычку",
    "actions.addSubtask": "Добавить подзадачу",
    "actions.edit": "Редактировать",
    "actions.delete": "Удалить",
    "actions.clear": "Очистить",
    "actions.save": "Сохранить",
    "actions.undo": "Отменить",
    "actions.moveLeft": "Переместить влево",
    "actions.moveRight": "Переместить вправо",
    "actions.moveUp": "Переместить выше",
    "actions.moveDown": "Переместить ниже",
    "metrics.goals": "Прогресс целей",
    "metrics.habits": "Выполнение привычек",
    "metrics.tasksToday": "Задачи сегодня",
    "metrics.meetings": "Встречи сегодня",
    "week.goalProgress": "Прогресс",
    "week.manualProgress": "Ручной прогресс",
    "week.subtasks": "Подзадачи",
    "week.addGoalSlot": "Заполнить карточку",
    "week.habit": "Привычка",
    "week.weekResult": "Итог недели",
    "week.addHabitSlot": "Добавить привычку",
    "week.habitSummary": "{done} из {available}",
    "week.noData": "Нет данных",
    "week.noGoals": "Нет целей",
    "week.noTasks": "Нет задач",
    "week.noSubtasks": "Добавьте первый конкретный шаг.",
    "week.autoProgress": "Рассчитывается по подзадачам",
    "goal.editorNew": "Новая цель",
    "goal.editorEdit": "Редактирование цели",
    "goal.title": "Название",
    "goal.description": "Описание",
    "goal.color": "Цвет",
    "goal.titleHint": "От 1 до 120 символов",
    "goal.descriptionHint": "До 2000 символов",
    "goal.progressHint": "От 0 до 100%",
    "goal.errorTitle": "Введите название цели",
    "goal.errorTitleLong": "Название должно быть не длиннее 120 символов",
    "goal.errorDescriptionLong": "Описание должно быть не длиннее 2000 символов",
    "goal.limitTitle": "Четыре цели уже заданы",
    "goal.limitCopy": "На неделю доступно четыре цели.",
    "goal.clearTitle": "Очистить эту цель?",
    "goal.clearCopy": "Цель и её подзадачи будут удалены. Связанные записи сохранятся без связи с целью.",
    "goal.clearedTitle": "Цель очищена",
    "goal.clearedCopy": "После закрытия страницы отмена будет недоступна.",
    "goal.restoredTitle": "Цель восстановлена",
    "goal.restoredCopy": "Карточка и её подзадачи снова на месте.",
    "subtask.editorNew": "Новая подзадача",
    "subtask.editorEdit": "Редактирование подзадачи",
    "subtask.text": "Текст",
    "subtask.tags": "Хэштеги",
    "subtask.tagsHint": "Введите через пробел: #работа #фокус",
    "subtask.errorText": "Введите текст подзадачи",
    "subtask.errorLong": "Текст должен быть не длиннее 300 символов",
    "subtask.deleteTitle": "Удалить подзадачу?",
    "subtask.deleteCopy": "Она исчезнет из цели. Действие можно отменить в течение 7 секунд.",
    "subtask.deletedTitle": "Подзадача удалена",
    "subtask.deletedCopy": "После закрытия страницы отмена будет недоступна.",
    "habit.editorNew": "Новая привычка",
    "habit.editorEdit": "Название привычки",
    "habit.name": "Название",
    "habit.versionNote": "Изменение действует с выбранной недели. Прошлые недели сохранят прежнее название.",
    "habit.errorName": "Введите название привычки",
    "habit.errorLong": "Название должно быть не длиннее 120 символов",
    "habit.clear": "Очистить с этой недели",
    "habit.clearTitle": "Очистить привычку с этой недели?",
    "habit.clearCopy": "Прошлая история сохранится, а в выбранной и следующих неделях позиция станет пустой до новой версии.",
    "habit.limitTitle": "Три привычки уже заданы",
    "habit.limitCopy": "В планировщике доступно три постоянные позиции привычек.",
    "habit.state.unmarked": "Не отмечено",
    "habit.state.done": "Выполнено",
    "habit.state.missed": "Не выполнено",
    "habit.future": "Будущие даты пока недоступны",
    "confirm.unsavedTitle": "Закрыть без сохранения?",
    "confirm.unsavedCopy": "Внесённые в форму изменения будут потеряны.",
    "overview.progressAria": "Общий прогресс недели: {value} процентов",
    "overview.addData": "Добавьте первые данные",
    "overview.goalsCount": "Заполнено {count} из 4",
    "toast.savedTitle": "Изменения сохранены",
    "toast.savedCopy": "Данные этой недели обновлены.",
    "color.royalIndigo": "Королевский индиго",
    "color.emeraldSilk": "Изумрудный шёлк",
    "color.matteBurgundy": "Матовый бордо",
    "color.spicedSaffron": "Пряный шафран",
    "color.terracottaSuede": "Терракотовый замш",
    "color.midnightPurple": "Полуночный пурпур",
    "color.bitterChocolate": "Горький шоколад",
    "color.nobleSage": "Благородный шалфей",
    "task.addMain": "Добавить главную задачу", "task.addOther": "Добавить обычную задачу",
    "task.new": "Новая задача", "task.edit": "Редактирование задачи", "task.title": "Заголовок", "task.text": "Основной текст",
    "task.list": "Список", "task.main": "Главные", "task.other": "Остальные", "task.complete": "Отметить выполненной",
    "task.schedule": "Запланировать", "task.moveList": "Переместить в другой список", "task.limitTitle": "Список уже заполнен",
    "task.limitMain": "На день можно выбрать не больше трёх главных задач.", "task.limitOther": "На день можно добавить не больше десяти остальных задач.",
    "task.errorTitle": "Введите заголовок задачи", "task.errorLong": "Заголовок должен быть не длиннее 300 символов",
    "task.deleteTitle": "Удалить задачу?", "task.deleteCopy": "Задача и её блок в расписании будут удалены. Отмена доступна 7 секунд.",
    "task.deletedTitle": "Задача удалена", "task.deletedCopy": "После закрытия страницы отмена будет недоступна.",
    "task.emptyMain": "Добавьте до трёх главных результатов дня.", "task.emptyOther": "Добавьте остальные дела — до десяти строк.",
    "schedule.scale": "Масштаб", "schedule.scaleCompact": "Компактный", "schedule.scaleStandard": "Стандартный", "schedule.scaleLarge": "Крупный",
    "schedule.new": "Новая запись", "schedule.edit": "Редактирование записи", "schedule.title": "Заголовок", "schedule.description": "Описание",
    "schedule.date": "Дата", "schedule.start": "Начало", "schedule.end": "Окончание", "schedule.column": "Колонка", "schedule.color": "Цвет",
    "schedule.fixed": "Жёсткая встреча", "schedule.flexible": "Гибкие дела", "schedule.duplicate": "Дублировать", "schedule.unschedule": "Убрать из расписания",
    "schedule.deleteTitle": "Удалить запись?", "schedule.deleteCopy": "Запись исчезнет из расписания. Отмена доступна 7 секунд.",
    "schedule.deletedTitle": "Запись удалена", "schedule.deletedCopy": "После закрытия страницы отмена будет недоступна.",
    "schedule.errorRange": "Выберите получасовой интервал в пределах 06:00–24:00; окончание должно быть позже начала.",
    "schedule.conflict": "Время пересекается с другой записью", "schedule.conflictShort": "Конфликт времени", "schedule.dragHint": "Перетащите задачу сюда или нажмите на ячейку.",
    "ideal.copyToWeek": "Скопировать в будущую неделю", "ideal.new": "Элемент идеальной недели", "ideal.edit": "Редактирование идеальной недели",
    "ideal.day": "День недели", "ideal.category": "Категория", "ideal.copyTitle": "Скопировать идеальную неделю", "ideal.targetWeek": "Неделя назначения",
    "ideal.copyConfirm": "Все элементы этой идеальной недели будут добавлены в выбранную будущую идеальную неделю.", "ideal.copyDuplicate": "В выбранной идеальной неделе уже есть элементы. К ним будут добавлены новые.",
    "ideal.copyDoneTitle": "Идеальная неделя скопирована", "ideal.copyDoneCopy": "Все элементы добавлены одним действием; его можно отменить 7 секунд.",
    "ideal.copyEmptyTitle": "Идеальная неделя пока пуста", "ideal.copyEmptyCopy": "Сначала добавьте хотя бы один элемент идеальной недели.",
    "ideal.deletedTitle": "Элемент удалён", "ideal.deletedCopy": "Отмена доступна 7 секунд.",
    "actions.duplicate": "Дублировать", "actions.moveOther": "В остальные", "actions.moveMain": "В главные"
  });

  Object.assign(TRANSLATIONS.en, {
    "actions.addGoal": "Add goal",
    "actions.addHabit": "Add habit",
    "actions.addSubtask": "Add subtask",
    "actions.edit": "Edit",
    "actions.delete": "Delete",
    "actions.clear": "Clear",
    "actions.save": "Save",
    "actions.undo": "Undo",
    "actions.moveLeft": "Move left",
    "actions.moveRight": "Move right",
    "actions.moveUp": "Move up",
    "actions.moveDown": "Move down",
    "metrics.goals": "Goal progress",
    "metrics.habits": "Habit completion",
    "metrics.tasksToday": "Tasks today",
    "metrics.meetings": "Meetings today",
    "week.goalProgress": "Progress",
    "week.manualProgress": "Manual progress",
    "week.subtasks": "Subtasks",
    "week.addGoalSlot": "Fill this card",
    "week.habit": "Habit",
    "week.weekResult": "Week total",
    "week.addHabitSlot": "Add habit",
    "week.habitSummary": "{done} of {available}",
    "week.noData": "No data",
    "week.noGoals": "No goals",
    "week.noTasks": "No tasks",
    "week.noSubtasks": "Add the first concrete step.",
    "week.autoProgress": "Calculated from subtasks",
    "goal.editorNew": "New goal",
    "goal.editorEdit": "Edit goal",
    "goal.title": "Title",
    "goal.description": "Description",
    "goal.color": "Colour",
    "goal.titleHint": "1 to 120 characters",
    "goal.descriptionHint": "Up to 2,000 characters",
    "goal.progressHint": "0 to 100%",
    "goal.errorTitle": "Enter a goal title",
    "goal.errorTitleLong": "The title must be no longer than 120 characters",
    "goal.errorDescriptionLong": "The description must be no longer than 2,000 characters",
    "goal.limitTitle": "All four goals are set",
    "goal.limitCopy": "Four goals are available for each week.",
    "goal.clearTitle": "Clear this goal?",
    "goal.clearCopy": "The goal and its subtasks will be removed. Linked items will remain without the goal link.",
    "goal.clearedTitle": "Goal cleared",
    "goal.clearedCopy": "Undo will be unavailable after closing the page.",
    "goal.restoredTitle": "Goal restored",
    "goal.restoredCopy": "The card and its subtasks are back in place.",
    "subtask.editorNew": "New subtask",
    "subtask.editorEdit": "Edit subtask",
    "subtask.text": "Text",
    "subtask.tags": "Hashtags",
    "subtask.tagsHint": "Separate with spaces: #work #focus",
    "subtask.errorText": "Enter subtask text",
    "subtask.errorLong": "The text must be no longer than 300 characters",
    "subtask.deleteTitle": "Delete this subtask?",
    "subtask.deleteCopy": "It will be removed from the goal. You can undo for 7 seconds.",
    "subtask.deletedTitle": "Subtask deleted",
    "subtask.deletedCopy": "Undo will be unavailable after closing the page.",
    "habit.editorNew": "New habit",
    "habit.editorEdit": "Habit name",
    "habit.name": "Name",
    "habit.versionNote": "The change applies from the selected week. Earlier weeks keep the previous name.",
    "habit.errorName": "Enter a habit name",
    "habit.errorLong": "The name must be no longer than 120 characters",
    "habit.clear": "Clear from this week",
    "habit.clearTitle": "Clear this habit from this week?",
    "habit.clearCopy": "Earlier history stays intact. This and later weeks will be empty until a new version is added.",
    "habit.limitTitle": "All three habits are set",
    "habit.limitCopy": "The planner has three permanent habit positions.",
    "habit.state.unmarked": "Not marked",
    "habit.state.done": "Completed",
    "habit.state.missed": "Not completed",
    "habit.future": "Future dates are not available yet",
    "confirm.unsavedTitle": "Close without saving?",
    "confirm.unsavedCopy": "Changes made in the form will be lost.",
    "overview.progressAria": "Overall week progress: {value} percent",
    "overview.addData": "Add the first data",
    "overview.goalsCount": "{count} of 4 filled",
    "toast.savedTitle": "Changes saved",
    "toast.savedCopy": "This week's data has been updated.",
    "color.royalIndigo": "Royal indigo",
    "color.emeraldSilk": "Emerald silk",
    "color.matteBurgundy": "Matte burgundy",
    "color.spicedSaffron": "Spiced saffron",
    "color.terracottaSuede": "Terracotta suede",
    "color.midnightPurple": "Midnight purple",
    "color.bitterChocolate": "Bitter chocolate",
    "color.nobleSage": "Noble sage",
    "task.addMain": "Add main task", "task.addOther": "Add other task", "task.new": "New task", "task.edit": "Edit task", "task.title": "Title", "task.text": "Main text", "task.list": "List", "task.main": "Main", "task.other": "Other", "task.complete": "Mark completed", "task.schedule": "Schedule", "task.moveList": "Move to another list", "task.limitTitle": "This list is full", "task.limitMain": "A day can have no more than three main tasks.", "task.limitOther": "A day can have no more than ten other tasks.", "task.errorTitle": "Enter a task title", "task.errorLong": "The title must be no longer than 300 characters", "task.deleteTitle": "Delete this task?", "task.deleteCopy": "The task and its schedule block will be deleted. Undo is available for 7 seconds.", "task.deletedTitle": "Task deleted", "task.deletedCopy": "Undo will be unavailable after closing the page.", "task.emptyMain": "Add up to three main outcomes for the day.", "task.emptyOther": "Add the rest of the day’s work — up to ten rows.",
    "schedule.scale": "Scale", "schedule.scaleCompact": "Compact", "schedule.scaleStandard": "Standard", "schedule.scaleLarge": "Large", "schedule.new": "New entry", "schedule.edit": "Edit entry", "schedule.title": "Title", "schedule.description": "Description", "schedule.date": "Date", "schedule.start": "Start", "schedule.end": "End", "schedule.column": "Column", "schedule.color": "Colour", "schedule.fixed": "Fixed meeting", "schedule.flexible": "Flexible task", "schedule.duplicate": "Duplicate", "schedule.unschedule": "Remove from schedule", "schedule.deleteTitle": "Delete this entry?", "schedule.deleteCopy": "The entry will be removed from the schedule. Undo is available for 7 seconds.", "schedule.deletedTitle": "Entry deleted", "schedule.deletedCopy": "Undo will be unavailable after closing the page.", "schedule.errorRange": "Choose a 30-minute interval between 06:00 and 24:00; the end must be later than the start.", "schedule.conflict": "This time overlaps another entry", "schedule.conflictShort": "Time conflict", "schedule.dragHint": "Drop a task here or click the slot.",
    "ideal.copyToWeek": "Copy to a future week", "ideal.new": "Ideal-week item", "ideal.edit": "Edit ideal week item", "ideal.day": "Day of week", "ideal.category": "Category", "ideal.copyTitle": "Copy ideal week", "ideal.targetWeek": "Target week", "ideal.copyConfirm": "All items from this ideal week will be added to the selected future ideal week.", "ideal.copyDuplicate": "The selected ideal week already has items. New ones will be added.", "ideal.copyDoneTitle": "Ideal week copied", "ideal.copyDoneCopy": "All items were added as one action; it can be undone for 7 seconds.", "ideal.copyEmptyTitle": "The ideal week is empty", "ideal.copyEmptyCopy": "Add at least one ideal-week item first.", "ideal.deletedTitle": "Item deleted", "ideal.deletedCopy": "Undo is available for 7 seconds.", "actions.duplicate": "Duplicate", "actions.moveOther": "Move to other", "actions.moveMain": "Move to main"
  });

  Object.assign(TRANSLATIONS.ru, {
    "actions.addTask": "Задача", "actions.addMeeting": "Встреча", "actions.addNote": "Запись", "actions.shareTelegram": "Поделиться в Telegram",
    "actions.remove": "Убрать", "actions.openRecord": "Открыть запись",
    "record.newNote": "Новая запись", "record.editNote": "Редактирование записи", "record.tags": "Хэштеги", "record.tagsHint": "Кириллица, латиница, цифры и _. Пробел завершает тег.",
    "record.goal": "Связь с целью", "record.habit": "Связь с привычкой", "record.noLink": "Без связи", "record.files": "Связанные файлы",
    "record.filesHint": "Сохраняется только название. Сам файл не прикрепляется", "record.chooseFiles": "Выбрать файлы", "record.fileLimit": "Можно сохранить до десяти уникальных названий.",
    "record.reminders": "Напоминания", "record.reminder15": "За 15 минут", "record.reminderNow": "В момент начала", "record.noTimeNote": "Свободная запись хранится без размещения во временной сетке.",
    "recurrence.title": "Повторение", "recurrence.none": "Не повторять", "recurrence.daily": "Ежедневно", "recurrence.weekly": "Еженедельно", "recurrence.until": "Дата окончания",
    "recurrence.noEnd": "Без даты окончания", "recurrence.errorUntil": "Дата окончания не может быть раньше первой записи.", "recurrence.scopeTitle": "Какие записи изменить?",
    "recurrence.scopeCopy": "Выберите область действия для повторяющейся серии.", "recurrence.this": "Только эту", "recurrence.following": "Эту и последующие", "recurrence.all": "Всю серию",
    "recurrence.deleteTitle": "Удалить повторяющуюся запись?", "recurrence.seriesLabel": "Серия: {rule}",
    "search.type": "Тип", "search.allTypes": "Все типы", "search.goals": "Цели", "search.subtasks": "Подзадачи", "search.habits": "Привычки", "search.tasks": "Задачи", "search.meetings": "Встречи", "search.flexible": "Гибкие дела", "search.notes": "Заметки", "search.ideal": "Идеальная неделя", "search.series": "Серии",
    "search.completion": "Выполнение", "search.all": "Все", "search.done": "Выполнено", "search.open": "Не выполнено", "search.dateFrom": "С даты", "search.dateTo": "По дату", "search.tags": "Хэштеги", "search.results": "Найдено: {count}", "search.noMatches": "Ничего не найдено", "search.recent": "Все сохранённые данные",
    "settings.dictation": "Диктовка", "settings.dictationCopy": "Язык и согласие на распознавание браузером.", "settings.dictationLanguage": "Язык диктовки", "settings.giveConsent": "Дать согласие", "settings.revokeConsent": "Отозвать согласие",
    "speech.button": "Диктовать", "speech.stop": "Остановить диктовку", "speech.consentTitle": "Разрешить диктовку?", "speech.consentCopy": "Chrome может передавать голос сервису распознавания браузера. Аудио не сохраняется в планировщике.",
    "speech.offlineTitle": "Диктовка недоступна офлайн", "speech.offlineCopy": "Подключитесь к интернету или продолжите ввод вручную.", "speech.unavailableTitle": "Диктовка недоступна", "speech.unavailableCopy": "Этот браузер или текущие разрешения не поддерживают распознавание. Ручной текст сохранён.",
    "speech.listening": "Слушаю…", "speech.revokedTitle": "Согласие отозвано", "speech.revokedCopy": "Микрофон не будет запускаться до нового согласия.",
    "card.title": "Премиальная визитка", "card.name": "Имя", "card.company": "Компания", "card.save": "Сохранить визитку", "card.savedTitle": "Визитка сохранена", "card.savedCopy": "Она будет использоваться в Telegram-превью.", "card.error": "Заполните все поля и укажите корректный email.",
    "telegram.preview": "Предпросмотр", "telegram.title": "Поделиться в Telegram", "telegram.later": "Интеграция появится позже", "telegram.cardMissingTitle": "Сначала заполните визитку", "telegram.cardMissingCopy": "Перейдите в настройки и сохраните имя, компанию, Telegram и email.",
    "reminder.groupTitle": "Напоминания: {count}", "reminder.singleTitle": "Напоминание", "reminder.more": "Ещё {count} напоминаний", "reminder.at": "{time} · {title}"
  });

  Object.assign(TRANSLATIONS.en, {
    "actions.addTask": "Task", "actions.addMeeting": "Meeting", "actions.addNote": "Note", "actions.shareTelegram": "Share to Telegram", "actions.remove": "Remove", "actions.openRecord": "Open entry",
    "record.newNote": "New note", "record.editNote": "Edit note", "record.tags": "Hashtags", "record.tagsHint": "Letters, digits and _. A space completes a tag.", "record.goal": "Linked goal", "record.habit": "Linked habit", "record.noLink": "No link", "record.files": "Linked files", "record.filesHint": "Only the name is saved. The file itself is not attached", "record.chooseFiles": "Choose files", "record.fileLimit": "Up to ten unique names can be saved.", "record.reminders": "Reminders", "record.reminder15": "15 minutes before", "record.reminderNow": "At start time", "record.noTimeNote": "A free note is stored without a time-grid block.",
    "recurrence.title": "Repeat", "recurrence.none": "Do not repeat", "recurrence.daily": "Daily", "recurrence.weekly": "Weekly", "recurrence.until": "End date", "recurrence.noEnd": "No end date", "recurrence.errorUntil": "The end date cannot be before the first entry.", "recurrence.scopeTitle": "Which entries should change?", "recurrence.scopeCopy": "Choose the scope for this recurring series.", "recurrence.this": "This one only", "recurrence.following": "This and following", "recurrence.all": "Entire series", "recurrence.deleteTitle": "Delete recurring entry?", "recurrence.seriesLabel": "Series: {rule}",
    "search.type": "Type", "search.allTypes": "All types", "search.goals": "Goals", "search.subtasks": "Subtasks", "search.habits": "Habits", "search.tasks": "Tasks", "search.meetings": "Meetings", "search.flexible": "Flexible activities", "search.notes": "Notes", "search.ideal": "Ideal week", "search.series": "Series", "search.completion": "Completion", "search.all": "All", "search.done": "Completed", "search.open": "Not completed", "search.dateFrom": "From", "search.dateTo": "To", "search.tags": "Hashtags", "search.results": "Found: {count}", "search.noMatches": "Nothing found", "search.recent": "All saved data",
    "settings.dictation": "Dictation", "settings.dictationCopy": "Language and browser recognition consent.", "settings.dictationLanguage": "Dictation language", "settings.giveConsent": "Give consent", "settings.revokeConsent": "Revoke consent", "speech.button": "Dictate", "speech.stop": "Stop dictation", "speech.consentTitle": "Allow dictation?", "speech.consentCopy": "Chrome may send speech to its recognition provider. Audio is not stored in the planner.", "speech.offlineTitle": "Dictation is unavailable offline", "speech.offlineCopy": "Connect to the internet or continue typing.", "speech.unavailableTitle": "Dictation unavailable", "speech.unavailableCopy": "This browser or its current permissions cannot recognise speech. Your typed text is preserved.", "speech.listening": "Listening…", "speech.revokedTitle": "Consent revoked", "speech.revokedCopy": "The microphone will not start until consent is given again.",
    "card.title": "Premium business card", "card.name": "Name", "card.company": "Company", "card.save": "Save business card", "card.savedTitle": "Business card saved", "card.savedCopy": "It will be used in Telegram previews.", "card.error": "Complete every field and enter a valid email.", "telegram.preview": "Preview", "telegram.title": "Share to Telegram", "telegram.later": "Integration is coming later", "telegram.cardMissingTitle": "Complete your business card first", "telegram.cardMissingCopy": "Open settings and save your name, company, Telegram and email.",
    "reminder.groupTitle": "Reminders: {count}", "reminder.singleTitle": "Reminder", "reminder.more": "{count} more reminders", "reminder.at": "{time} · {title}"
  });

  Object.assign(TRANSLATIONS.ru, {
    "schedule.flexible": "Гибкие дела",
    "ideal.kicker": "Выбранная календарная неделя", "ideal.copyToWeek": "Скопировать в будущую неделю", "ideal.emptyCopy": "План этой недели не изменяет предыдущие и будущие недели.",
    "ideal.copyConfirm": "Все элементы этой идеальной недели будут добавлены в выбранную будущую идеальную неделю.", "ideal.copyDuplicate": "В выбранной идеальной неделе уже есть элементы. К ним будут добавлены новые.", "ideal.copyFutureError": "Выберите неделю позже текущей.",
    "panel.ideal.1.title": "Отдельная неделя", "panel.ideal.1.copy": "Идеальная неделя относится только к выбранной календарной неделе.", "panel.ideal.3.copy": "Все элементы можно вручную скопировать в одну выбранную будущую идеальную неделю.",
    "notes.title": "Заметки", "notes.kicker": "Общее пространство", "notes.listTitle": "Все заметки", "notes.copy": "Общие заметки для всего приложения — без ограничения по количеству.", "notes.add": "Добавить заметку", "notes.empty": "Добавьте первую заметку",
    "notes.new": "Новая заметка", "notes.edit": "Редактирование заметки", "notes.noteTitle": "Заголовок", "notes.description": "Описание", "notes.tags": "Хэштеги", "notes.deleteTitle": "Удалить заметку?", "notes.deleteCopy": "Заметка будет удалена. Отмена доступна в течение 7 секунд.", "notes.deletedTitle": "Заметка удалена", "notes.deletedCopy": "Удаление можно отменить в течение 7 секунд.",
    "data.title": "Данные и резервные копии", "data.copy": "Все данные находятся только в этом браузере. Регулярно сохраняйте резервную копию.", "data.storage": "Хранилище", "data.export": "Экспортировать JSON", "data.import": "Импортировать JSON", "data.clearWeek": "Очистить выбранную неделю", "data.clearOld": "Очистить старые недели", "data.clearAll": "Удалить все данные", "data.olderThan": "Недели старше даты", "data.weeks": "{count} недель", "data.oldWeeks": "Будет удалено: {count}", "data.warning80": "Хранилище заполнено на 80%. Сохраните копию и очистите старые недели.", "data.warning95": "Хранилище почти заполнено. Новые длинные записи могут не сохраниться.",
    "backup.title": "Сначала сохраните копию", "backup.copy": "Перед необратимым действием скачайте полный JSON-файл.", "backup.download": "Скачать текущую копию", "backup.saved": "Резервная копия сохранена", "backup.deletePhrase": "Введите «УДАЛИТЬ ВСЕ»", "backup.downloaded": "Скачивание запущено", "backup.downloadedCopy": "Проверьте файл и подтвердите его сохранение.",
    "import.invalidTitle": "Файл не подходит", "import.invalidCopy": "Выберите полный JSON-экспорт этого планировщика версии 1.", "import.confirmTitle": "Заменить все данные?", "import.confirmCopy": "Текущие данные будут полностью заменены выбранной копией.", "import.doneTitle": "Данные восстановлены", "import.doneCopy": "Резервная копия успешно импортирована.", "import.rollbackTitle": "Импорт отменён", "import.rollbackCopy": "Ошибка записи. Предыдущие данные восстановлены.",
    "clear.weekTitle": "Очистить выбранную неделю?", "clear.weekCopy": "Цели, привычки, задачи, расписание и идеальная неделя будут удалены.", "clear.weekDoneTitle": "Неделя очищена", "clear.weekDoneCopy": "Отмена доступна 7 секунд. После закрытия страницы отмена будет недоступна.", "clear.oldTitle": "Очистить старые недели?", "clear.oldCopy": "Выбранные недельные данные будут удалены без автоматического восстановления.", "clear.oldEmptyTitle": "Нет старых недель", "clear.oldEmptyCopy": "Выберите более позднюю дату или оставьте данные без изменений.", "clear.allTitle": "Удалить все данные?", "clear.allCopy": "Планировщик вернётся к приветствию. Восстановление возможно только из JSON-копии.",
    "recovery.kicker": "Безопасное восстановление", "recovery.title": "Локальные данные повреждены", "recovery.copy": "Планировщик не заменил повреждённые данные. Скачайте исходную копию или восстановите корректный JSON.", "recovery.download": "Скачать повреждённую копию", "recovery.retry": "Повторить попытку", "recovery.reset": "Начать заново", "recovery.resetTitle": "Удалить повреждённые данные?", "recovery.resetCopy": "Сначала скачайте исходную копию. Затем приложение создаст пустой планировщик.",
    "toast.quotaTitle": "Недостаточно места", "toast.quotaCopy": "Изменения остаются в этой вкладке. Экспортируйте данные и очистите старые недели.",
    "help.goalsTitle": "Цели и привычки", "help.goalsCopy": "Четыре цели используют ручной прогресс без подзадач и автоматический — с ними. Привычка циклично меняет три состояния.", "help.tasksTitle": "Задачи и перенос", "help.tasksCopy": "В день помещаются три главные и десять остальных задач. Перетаскивание можно заменить кнопками перемещения.", "help.recurrenceTitle": "Повторения и напоминания", "help.recurrenceCopy": "Серии бывают ежедневными и еженедельными. Напоминания работают только пока страница открыта.", "help.integrationsTitle": "Файлы, Telegram и диктовка", "help.integrationsCopy": "Сохраняются только имена файлов, Telegram показывает превью без отправки, а диктовка может обращаться к сервису Chrome.", "help.backupTitle": "Резервное копирование", "help.backupCopy": "Экспорт сохраняет полный JSON. Импорт и очистка доступны только после подтверждённой резервной копии."
  });

  Object.assign(TRANSLATIONS.en, {
    "nav.notes": "Notes",
    "schedule.flexible": "Flexible activities",
    "ideal.kicker": "Selected calendar week", "ideal.copyToWeek": "Copy to a future week", "ideal.emptyCopy": "This week's plan does not affect previous or future weeks.",
    "ideal.copyConfirm": "All items from this ideal week will be added to the selected future ideal week.", "ideal.copyDuplicate": "The selected ideal week already has items. New ones will be added.", "ideal.copyFutureError": "Choose a week later than the current one.",
    "panel.ideal.1.title": "One calendar week", "panel.ideal.1.copy": "The ideal week belongs only to the selected calendar week.", "panel.ideal.3.copy": "All items can be copied manually into one selected future ideal week.",
    "notes.title": "Notes", "notes.kicker": "Shared space", "notes.listTitle": "All notes", "notes.copy": "Shared notes for the whole app, with no item limit.", "notes.add": "Add note", "notes.empty": "Add your first note",
    "notes.new": "New note", "notes.edit": "Edit note", "notes.noteTitle": "Title", "notes.description": "Description", "notes.tags": "Hashtags", "notes.deleteTitle": "Delete note?", "notes.deleteCopy": "The note will be deleted. Undo is available for 7 seconds.", "notes.deletedTitle": "Note deleted", "notes.deletedCopy": "Deletion can be undone for 7 seconds.",
    "data.title": "Data and backups", "data.copy": "All data stays in this browser. Save a backup regularly.", "data.storage": "Storage", "data.export": "Export JSON", "data.import": "Import JSON", "data.clearWeek": "Clear selected week", "data.clearOld": "Clear old weeks", "data.clearAll": "Delete all data", "data.olderThan": "Weeks older than", "data.weeks": "{count} weeks", "data.oldWeeks": "Will be deleted: {count}", "data.warning80": "Storage is 80% full. Save a backup and clear old weeks.", "data.warning95": "Storage is almost full. New long entries may not be saved.",
    "backup.title": "Save a backup first", "backup.copy": "Download a complete JSON file before this irreversible action.", "backup.download": "Download current backup", "backup.saved": "The backup is saved", "backup.deletePhrase": "Enter “DELETE ALL”", "backup.downloaded": "Download started", "backup.downloadedCopy": "Check the file and confirm that it was saved.",
    "import.invalidTitle": "This file cannot be used", "import.invalidCopy": "Choose a complete version 1 JSON export from this planner.", "import.confirmTitle": "Replace all data?", "import.confirmCopy": "Current data will be completely replaced by the selected backup.", "import.doneTitle": "Data restored", "import.doneCopy": "The backup was imported successfully.", "import.rollbackTitle": "Import cancelled", "import.rollbackCopy": "A write failed. Previous data was restored.",
    "clear.weekTitle": "Clear the selected week?", "clear.weekCopy": "Goals, habits, tasks, schedule and ideal week will be deleted.", "clear.weekDoneTitle": "Week cleared", "clear.weekDoneCopy": "Undo is available for 7 seconds. It will not be available after closing the page.", "clear.oldTitle": "Clear old weeks?", "clear.oldCopy": "The selected weekly data will be deleted without automatic recovery.", "clear.oldEmptyTitle": "No old weeks", "clear.oldEmptyCopy": "Choose a later date or leave the data unchanged.", "clear.allTitle": "Delete all data?", "clear.allCopy": "The planner will return to the welcome guide. Recovery is possible only from a JSON backup.",
    "recovery.kicker": "Safe recovery", "recovery.title": "Local data is damaged", "recovery.copy": "The planner did not replace damaged data. Download the raw copy or restore a valid JSON file.", "recovery.download": "Download damaged copy", "recovery.retry": "Try again", "recovery.reset": "Start over", "recovery.resetTitle": "Delete damaged data?", "recovery.resetCopy": "Download the raw copy first. The app will then create an empty planner.",
    "toast.quotaTitle": "Not enough storage", "toast.quotaCopy": "Changes remain in this tab. Export data and clear old weeks.",
    "help.goalsTitle": "Goals and habits", "help.goalsCopy": "Four goals use manual progress without subtasks and automatic progress with them. A habit cycles through three states.", "help.tasksTitle": "Tasks and moving", "help.tasksCopy": "Each day holds three main and ten other tasks. Move buttons are an alternative to drag and drop.", "help.recurrenceTitle": "Repeats and reminders", "help.recurrenceCopy": "Series can repeat daily or weekly. Reminders work only while the page is open.", "help.integrationsTitle": "Files, Telegram and dictation", "help.integrationsCopy": "Only file names are stored, Telegram shows a preview without sending, and dictation may use Chrome's service.", "help.backupTitle": "Backups", "help.backupCopy": "Export saves a complete JSON file. Import and clearing require a confirmed backup first."
  });

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
    prefix: "premiumPlanner.",
    budgetBytes: 4 * 1024 * 1024,
    keys: {
      meta: "premiumPlanner.meta",
      settings: "premiumPlanner.settings",
      ui: "premiumPlanner.ui",
      weekIndex: "premiumPlanner.weekIndex",
      habits: "premiumPlanner.habits",
      idealWeek: "premiumPlanner.idealWeek",
      series: "premiumPlanner.series",
      notes: "premiumPlanner.notes",
      businessCard: "premiumPlanner.businessCard",
      recovery: "premiumPlanner.recovery"
    },
    queue: new Map(),
    timer: null,
    faults: [],
    onStatus: () => {},
    onError: () => {},
    onUsage: () => {},

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
          sidebarCollapsed: false,
          scheduleScale: "standard",
          speechLanguage: "auto",
          speechConsent: false,
          cardVariant: "light",
          businessCard: { name: "", company: "", telegram: "", email: "" }
        },
        ui: {
          view: "overview",
          selectedDate: DateService.todayISO(),
          selectedWeek: DateService.toISO(DateService.startOfWeek(new Date()))
        }
      };
    },

    recordFault(key, raw, error) {
      if (!this.faults.some((fault) => fault.key === key)) this.faults.push({ key, raw, error });
    },

    audit() {
      this.faults = [];
      let keys;
      try { keys = this.appKeys(); }
      catch (error) { this.recordFault(this.prefix, null, error); return; }
      keys.forEach((key) => {
        let raw = null;
        try {
          raw = localStorage.getItem(key);
          const parsed = JSON.parse(raw);
          if (parsed && typeof parsed === "object" && "schemaVersion" in parsed && parsed.schemaVersion !== 1) throw new Error(`Unsupported schema version in ${key}`);
          if (key === this.keys.weekIndex && !Array.isArray(parsed)) throw new Error(`Invalid index payload in ${key}`);
          const objectKeys = [this.keys.meta, this.keys.settings, this.keys.ui, this.keys.habits, this.keys.idealWeek, this.keys.series, this.keys.notes, this.keys.businessCard];
          if (objectKeys.includes(key) && (!parsed || typeof parsed !== "object" || Array.isArray(parsed))) throw new Error(`Invalid object payload in ${key}`);
          if (key.startsWith(`${this.prefix}week.`)) {
            const weekStart = key.slice(`${this.prefix}week.`.length);
            if (!parsed || typeof parsed !== "object" || parsed.schemaVersion !== 1 || parsed.weekStart !== weekStart) throw new Error(`Invalid week payload in ${key}`);
          }
        } catch (error) { this.recordFault(key, raw, error); }
      });
    },

    read(key, fallback) {
      let raw;
      try {
        raw = localStorage.getItem(key);
      } catch (error) {
        this.recordFault(key, null, error);
        return structuredClone(fallback);
      }
      if (raw === null) return structuredClone(fallback);
      try {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object" && "schemaVersion" in parsed && parsed.schemaVersion !== 1) {
          throw new Error(`Unsupported schema version in ${key}`);
        }
        return parsed;
      } catch (error) {
        this.recordFault(key, raw, error);
        return structuredClone(fallback);
      }
    },

    initialize() {
      this.audit();
      const defaults = this.defaults();
      const meta = this.read(this.keys.meta, defaults.meta);
      const settings = this.read(this.keys.settings, defaults.settings);
      const businessCard = this.read(this.keys.businessCard, settings.businessCard || defaults.settings.businessCard);
      this.read(this.keys.weekIndex, []);

      const safeSettings = {
        theme: ["system", "light", "dark"].includes(settings.theme) ? settings.theme : defaults.settings.theme,
        language: ["ru", "en"].includes(settings.language) ? settings.language : defaults.settings.language,
        soundEnabled: Boolean(settings.soundEnabled),
        sidebarCollapsed: Boolean(settings.sidebarCollapsed),
        scheduleScale: ["compact", "standard", "large"].includes(settings.scheduleScale) ? settings.scheduleScale : "standard",
        speechLanguage: ["auto", "ru", "en"].includes(settings.speechLanguage) ? settings.speechLanguage : "auto",
        speechConsent: Boolean(settings.speechConsent),
        cardVariant: settings.cardVariant === "dark" ? "dark" : "light",
        businessCard: {
          name: typeof businessCard?.name === "string" ? businessCard.name.slice(0, 120) : "",
          company: typeof businessCard?.company === "string" ? businessCard.company.slice(0, 160) : "",
          telegram: typeof businessCard?.telegram === "string" ? businessCard.telegram.slice(0, 100) : "",
          email: typeof businessCard?.email === "string" ? businessCard.email.slice(0, 254) : ""
        }
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
      this.seedMissing(this.keys.habits, { schemaVersion: 1, slots: [] });
      this.seedMissing(this.keys.idealWeek, { schemaVersion: 1, items: [], copiedWeekStarts: [] });
      this.seedMissing(this.keys.series, { schemaVersion: 1, items: [] });
      this.seedMissing(this.keys.notes, { schemaVersion: 1, items: [] });
      this.seedMissing(this.keys.businessCard, safeSettings.businessCard);

      return { meta: safeMeta, settings: safeSettings, ui };
    },

    seedMissing(key, value) {
      try {
        if (localStorage.getItem(key) === null) localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        this.recordFault(key, null, error);
      }
    },

    schedule(key, value) {
      this.queue.set(key, structuredClone(value));
      this.onStatus("saving");
      clearTimeout(this.timer);
      this.timer = window.setTimeout(() => this.flush(), 220);
    },

    writeNow(key, value) {
      this.queue.set(key, structuredClone(value));
      try {
        localStorage.setItem(key, JSON.stringify(value));
        this.queue.delete(key);
        this.onStatus("saved");
        this.onUsage(this.usage());
        return true;
      } catch (error) {
        this.onStatus("error");
        this.onError(error);
        return false;
      }
    },

    weekKey(weekStart) {
      return `premiumPlanner.week.${weekStart}`;
    },

    appKeys(includeRecovery = false) {
      const keys = [];
      for (let index = 0; index < localStorage.length; index += 1) {
        const key = localStorage.key(index);
        if (key?.startsWith(this.prefix) && (includeRecovery || key !== this.keys.recovery)) keys.push(key);
      }
      return keys.sort();
    },

    rawSnapshot(includeRecovery = false) {
      const entries = {};
      this.appKeys(includeRecovery).forEach((key) => { entries[key] = localStorage.getItem(key); });
      return entries;
    },

    parsedSnapshot() {
      const entries = {};
      this.appKeys().forEach((key) => {
        const raw = localStorage.getItem(key);
        entries[key] = JSON.parse(raw);
      });
      this.queue.forEach((value, key) => { entries[key] = structuredClone(value); });
      return entries;
    },

    backup() {
      this.flush();
      return { product: "premiumPlanner", schemaVersion: 1, exportedAt: new Date().toISOString(), data: this.parsedSnapshot() };
    },

    validateBackup(value) {
      const fail = (reason) => ({ valid: false, reason });
      if (!value || typeof value !== "object" || Array.isArray(value)) return fail("root");
      if (value.product !== "premiumPlanner" || value.schemaVersion !== 1 || !value.data || typeof value.data !== "object" || Array.isArray(value.data)) return fail("version");
      const required = [this.keys.meta, this.keys.settings, this.keys.ui, this.keys.weekIndex, this.keys.habits, this.keys.series, this.keys.notes];
      if (!required.every((key) => Object.prototype.hasOwnProperty.call(value.data, key))) return fail("incomplete");
      if (!Array.isArray(value.data[this.keys.weekIndex])) return fail("weekIndex");
      const indexedWeeks = value.data[this.keys.weekIndex].map((item) => item?.weekStart);
      if (indexedWeeks.some((weekStart) => !DateService.fromISO(weekStart) || !Object.prototype.hasOwnProperty.call(value.data, this.weekKey(weekStart)))) return fail("weekIndex");
      const objectKeys = [this.keys.meta, this.keys.settings, this.keys.ui, this.keys.habits, this.keys.series, this.keys.notes];
      if (!objectKeys.every((key) => value.data[key] && typeof value.data[key] === "object" && !Array.isArray(value.data[key]))) return fail("types");
      if (value.data[this.keys.meta].schemaVersion !== 1 || value.data[this.keys.habits].schemaVersion !== 1 || value.data[this.keys.series].schemaVersion !== 1 || value.data[this.keys.notes].schemaVersion !== 1) return fail("schema");
      for (const [key, entry] of Object.entries(value.data)) {
        if (!key.startsWith(this.prefix) || key === this.keys.recovery) return fail("key");
        if (key.startsWith(`${this.prefix}week.`)) {
          const weekStart = key.slice(`${this.prefix}week.`.length);
          if (!DateService.fromISO(weekStart) || !entry || typeof entry !== "object" || entry.schemaVersion !== 1 || entry.weekStart !== weekStart) return fail("week");
          if (!indexedWeeks.includes(weekStart)) return fail("weekIndex");
        }
      }
      const data = structuredClone(value.data);
      if (!data[this.keys.businessCard]) data[this.keys.businessCard] = structuredClone(data[this.keys.settings].businessCard || { name: "", company: "", telegram: "", email: "" });
      if (!data[this.keys.businessCard] || typeof data[this.keys.businessCard] !== "object" || Array.isArray(data[this.keys.businessCard])) return fail("businessCard");
      return { valid: true, data };
    },

    replaceAll(entries) {
      const previous = this.rawSnapshot(true);
      const previousQueue = new Map([...this.queue.entries()].map(([key, value]) => [key, structuredClone(value)]));
      this.queue.clear();
      clearTimeout(this.timer);
      this.timer = null;
      try {
        this.appKeys(true).forEach((key) => localStorage.removeItem(key));
        Object.entries(entries).forEach(([key, value]) => localStorage.setItem(key, JSON.stringify(value)));
        this.onStatus("saved");
        this.onUsage(this.usage());
        return { ok: true, rolledBack: false };
      } catch (error) {
        let rolledBack = false;
        try {
          this.appKeys(true).forEach((key) => localStorage.removeItem(key));
          Object.entries(previous).forEach(([key, raw]) => localStorage.setItem(key, raw));
          previousQueue.forEach((value, key) => this.queue.set(key, value));
          rolledBack = true;
        } catch (rollbackError) {
          this.recordFault(this.keys.recovery, null, rollbackError);
        }
        this.onStatus("error");
        this.onError(error);
        return { ok: false, rolledBack };
      }
    },

    removeKeys(keys) {
      try {
        keys.forEach((key) => localStorage.removeItem(key));
        this.onStatus("saved");
        this.onUsage(this.usage());
        return true;
      } catch (error) {
        this.onStatus("error");
        this.onError(error);
        return false;
      }
    },

    usage() {
      let bytes = 0;
      this.appKeys().forEach((key) => { bytes += (key.length + (localStorage.getItem(key)?.length || 0)) * 2; });
      const index = this.read(this.keys.weekIndex, []);
      const weeks = Array.isArray(index) ? index.filter((item) => DateService.fromISO(item?.weekStart)).length : 0;
      return { bytes, percent: Math.min(100, bytes / this.budgetBytes * 100), weeks };
    },

    corruptSnapshot() {
      const entries = {};
      this.faults.forEach(({ key, raw }) => { if (typeof raw === "string") entries[key] = raw; });
      return { product: "premiumPlanner-corrupt", capturedAt: new Date().toISOString(), entries };
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
        this.onUsage(this.usage());
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

  const PlannerDataService = {
    palette: ["royalIndigo", "emeraldSilk", "matteBurgundy", "spicedSaffron", "terracottaSuede", "midnightPurple", "bitterChocolate", "nobleSage"],
    legacyColors: {
      gold: "royalIndigo",
      champagne: "emeraldSilk",
      bronze: "matteBurgundy",
      sand: "spicedSaffron",
      sage: "terracottaSuede",
      blue: "midnightPurple",
      plum: "bitterChocolate",
      graphite: "nobleSage"
    },

    id() {
      if (typeof crypto?.randomUUID === "function") return crypto.randomUUID();
      return `local-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
    },

    emptyWeek(weekStart) {
      return {
        schemaVersion: 1,
        weekStart,
        goals: [null, null, null, null],
        habitMarks: {},
        days: {},
        records: [],
        idealItems: [],
        updatedAt: null
      };
    },

    normalizeWeek(value, weekStart) {
      const fallback = this.emptyWeek(weekStart);
      if (!value || value.schemaVersion !== 1 || value.weekStart !== weekStart) return fallback;
      const goals = Array.isArray(value.goals) ? value.goals.slice(0, 4) : [];
      while (goals.length < 4) goals.push(null);
      const normalized = {
        ...fallback,
        ...value,
        goals: goals.map((goal) => this.normalizeGoal(goal)),
        habitMarks: value.habitMarks && typeof value.habitMarks === "object" ? value.habitMarks : {},
        days: Object.fromEntries(Object.entries(value.days && typeof value.days === "object" ? value.days : {}).map(([date, day]) => [date, this.normalizeDay(day, date)])),
        records: Array.isArray(value.records) ? value.records.map((record) => this.normalizeRecord(record)).filter(Boolean) : [],
        idealItems: this.normalizeIdealWeek({ schemaVersion: 1, items: value.idealItems }).items
      };
      this.repairWeekLinks(normalized);
      return normalized;
    },

    repairWeekLinks(week) {
      const tasks = Object.values(week.days).flatMap((day) => [...day.mainTasks, ...day.otherTasks]);
      const taskById = new Map(tasks.map((task) => [task.id, task]));
      const recordById = new Map(week.records.map((record) => [record.id, record]));
      tasks.forEach((task) => {
        if (!task.scheduleRecordId || !recordById.has(task.scheduleRecordId)) { task.scheduleRecordId = null; return; }
        recordById.get(task.scheduleRecordId).taskId = task.id;
      });
      week.records.forEach((record) => {
        if (!record.taskId || !taskById.has(record.taskId) || taskById.get(record.taskId).scheduleRecordId !== record.id) record.taskId = null;
      });
    },

    normalizeDay(day, date) {
      const normalizeList = (items, list, limit) => (Array.isArray(items) ? items : []).slice(0, limit)
        .map((task, index) => this.normalizeTask(task, date, list, index)).filter(Boolean);
      return {
        mainTasks: normalizeList(day?.mainTasks, "main", 3),
        otherTasks: normalizeList(day?.otherTasks, "other", 10)
      };
    },

    normalizeTask(task, date, list, position) {
      if (!task || typeof task.title !== "string" || !task.title.trim()) return null;
      return {
        id: typeof task.id === "string" ? task.id : this.id(), title: task.title.slice(0, 300),
        text: typeof task.text === "string" ? task.text.slice(0, 10000) : "", date, list, position,
        isCompleted: Boolean(task.isCompleted), hashtags: this.normalizeHashtags(Array.isArray(task.hashtags) ? task.hashtags.join(" ") : ""),
        goalId: null, habitId: null, fileNames: this.mergeFileNames([], task.fileNames).names,
        scheduleRecordId: task.scheduleRecordId || null, reminders: task.reminders || null, recurrence: task.recurrence || null,
        createdAt: task.createdAt || new Date().toISOString(), updatedAt: task.updatedAt || new Date().toISOString()
      };
    },

    normalizeRecord(record) {
      if (!record || typeof record.title !== "string" || !record.title.trim() || !DateService.fromISO(record.date)) return null;
      const type = record.type === "note" ? "note" : (record.column === "fixed" ? "fixed" : "flexible");
      if (type !== "note" && !this.validateTimeRange(record.startTime, record.endTime).valid) return null;
      return {
        id: typeof record.id === "string" ? record.id : this.id(), title: record.title.slice(0, 300),
        description: typeof record.description === "string" ? record.description.slice(0, 10000) : "", date: record.date, type,
        startTime: type === "note" ? null : record.startTime, endTime: type === "note" ? null : record.endTime, column: type === "note" ? null : (record.column === "fixed" ? "fixed" : "flexible"),
        color: this.palette.includes(record.color) ? record.color : "royalIndigo", taskId: record.taskId || null,
        hashtags: this.normalizeHashtags(Array.isArray(record.hashtags) ? record.hashtags.join(" ") : ""), goalId: null, habitId: null,
        fileNames: this.mergeFileNames([], record.fileNames).names, reminders: record.reminders || null,
        recurrence: record.recurrence || null, seriesId: record.seriesId || null, createdAt: record.createdAt || new Date().toISOString(), updatedAt: record.updatedAt || new Date().toISOString()
      };
    },

    normalizeIdealWeek(value) {
      const items = value?.schemaVersion === 1 && Array.isArray(value.items) ? value.items.map((item) => {
        if (!item || typeof item.title !== "string" || !item.title.trim() || !this.validateTimeRange(item.startTime, item.endTime).valid) return null;
        return { id: typeof item.id === "string" ? item.id : this.id(), dayOfWeek: Math.max(1, Math.min(7, Number(item.dayOfWeek) || 1)),
          title: item.title.slice(0, 300), description: typeof item.description === "string" ? item.description.slice(0, 5000) : "",
          startTime: item.startTime, endTime: item.endTime, color: this.palette.includes(item.color) ? item.color : "royalIndigo",
          category: item.category === "hard" ? "hard" : "flexible", createdAt: item.createdAt || new Date().toISOString(), updatedAt: item.updatedAt || new Date().toISOString() };
      }).filter(Boolean) : [];
      return { schemaVersion: 1, items, copiedWeekStarts: Array.isArray(value?.copiedWeekStarts) ? value.copiedWeekStarts.filter((date) => DateService.fromISO(date)) : [] };
    },

    normalizeNotes(value) {
      const items = value?.schemaVersion === 1 && Array.isArray(value.items) ? value.items.map((item) => {
        if (!item || typeof item.title !== "string" || !item.title.trim()) return null;
        return { id: typeof item.id === "string" ? item.id : this.id(), title: item.title.slice(0, 300), description: typeof item.description === "string" ? item.description.slice(0, 10000) : "", color: this.palette.includes(item.color) ? item.color : "royalIndigo", hashtags: this.normalizeHashtags(Array.isArray(item.hashtags) ? item.hashtags.join(" ") : ""), createdAt: item.createdAt || new Date().toISOString(), updatedAt: item.updatedAt || new Date().toISOString() };
      }).filter(Boolean) : [];
      return { schemaVersion: 1, items };
    },

    validateTimeRange(startTime, endTime) {
      const start = this.timeToMinutes(startTime); const end = this.timeToMinutes(endTime);
      const valid = Number.isFinite(start) && Number.isFinite(end) && start >= 360 && start < 1440 && end > start && end <= 1440 && start % 30 === 0 && end % 30 === 0;
      return { valid, start, end };
    },

    minutesToTime(minutes) {
      if (minutes === 1440) return "24:00";
      return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
    },

    overlapLayout(records) {
      const result = new Map();
      const sorted = [...records].sort((a, b) => this.timeToMinutes(a.startTime) - this.timeToMinutes(b.startTime));
      let group = [];
      const flush = () => {
        if (!group.length) return;
        const lanes = [];
        group.forEach((record) => {
          const start = this.timeToMinutes(record.startTime); let lane = lanes.findIndex((end) => end <= start);
          if (lane < 0) { lane = lanes.length; lanes.push(0); }
          lanes[lane] = this.timeToMinutes(record.endTime); result.set(record.id, { lane, lanes: 0, conflict: false });
        });
        const laneCount = lanes.length;
        group.forEach((record) => Object.assign(result.get(record.id), { lanes: laneCount, conflict: laneCount > 1 }));
        group = [];
      };
      let groupEnd = -1;
      sorted.forEach((record) => {
        const start = this.timeToMinutes(record.startTime); const end = this.timeToMinutes(record.endTime);
        if (group.length && start >= groupEnd) flush();
        group.push(record); groupEnd = Math.max(groupEnd, end);
      });
      flush(); return result;
    },

    normalizeGoal(goal) {
      if (!goal || typeof goal !== "object" || typeof goal.title !== "string") return null;
      const subtasks = Array.isArray(goal.subtasks) ? goal.subtasks : [];
      return {
        id: typeof goal.id === "string" ? goal.id : this.id(),
        title: goal.title.slice(0, 120),
        description: typeof goal.description === "string" ? goal.description.slice(0, 2000) : "",
        color: this.palette.includes(this.legacyColors[goal.color] || goal.color)
          ? (this.legacyColors[goal.color] || goal.color)
          : "royalIndigo",
        manualProgress: this.clampProgress(goal.manualProgress),
        subtasks: subtasks.map((item, index) => ({
          id: typeof item?.id === "string" ? item.id : this.id(),
          text: typeof item?.text === "string" ? item.text.slice(0, 300) : "",
          isCompleted: Boolean(item?.isCompleted),
          hashtags: this.normalizeHashtags(Array.isArray(item?.hashtags) ? item.hashtags.join(" ") : ""),
          position: index
        })).filter((item) => item.text.trim()),
        createdAt: goal.createdAt || new Date().toISOString(),
        updatedAt: goal.updatedAt || new Date().toISOString()
      };
    },

    emptyHabits() {
      return {
        schemaVersion: 1,
        slots: Array.from({ length: 3 }, () => ({ id: this.id(), versions: [] }))
      };
    },

    normalizeHabits(value) {
      const fallback = this.emptyHabits();
      if (!value || value.schemaVersion !== 1 || !Array.isArray(value.slots)) return fallback;
      const slots = value.slots.slice(0, 3).map((slot, index) => ({
        id: typeof slot?.id === "string" ? slot.id : fallback.slots[index].id,
        versions: Array.isArray(slot?.versions)
          ? slot.versions.filter((version) => DateService.fromISO(version?.weekStart) && typeof version?.name === "string")
            .map((version) => ({ weekStart: version.weekStart, name: version.name.slice(0, 120) }))
            .sort((a, b) => a.weekStart.localeCompare(b.weekStart))
          : []
      }));
      while (slots.length < 3) slots.push(fallback.slots[slots.length]);
      return { schemaVersion: 1, slots };
    },

    effectiveHabitName(slot, weekStart) {
      return slot.versions.reduce((name, version) => version.weekStart <= weekStart ? version.name : name, "");
    },

    setHabitVersion(slot, weekStart, name) {
      const versions = slot.versions.filter((version) => version.weekStart !== weekStart);
      versions.push({ weekStart, name });
      versions.sort((a, b) => a.weekStart.localeCompare(b.weekStart));
      slot.versions = versions;
    },

    clampProgress(value) {
      const number = Number(value);
      if (!Number.isFinite(number)) return 0;
      return Math.max(0, Math.min(100, Math.round(number)));
    },

    goalProgress(goal) {
      if (!goal) return 0;
      if (!goal.subtasks.length) return this.clampProgress(goal.manualProgress);
      return Math.round(goal.subtasks.filter((item) => item.isCompleted).length / goal.subtasks.length * 100);
    },

    normalizeHashtags(raw) {
      const seen = new Set();
      return String(raw || "").split(/\s+/).map((tag) => tag.replace(/^#+/, "").trim())
        .filter((tag) => /^[\p{L}\d_]+$/u.test(tag))
        .map((tag) => tag.toLocaleLowerCase())
        .filter((tag) => !seen.has(tag) && seen.add(tag));
    },

    mergeFileNames(current, incoming) {
      const names = [...new Set([...(Array.isArray(current) ? current : []), ...(Array.isArray(incoming) ? incoming : [])].filter((name) => typeof name === "string" && name.trim()))];
      return { names: names.slice(0, 10), overflow: names.length > 10 };
    },

    habitAvailability(weekStart) {
      const today = DateService.todayISO();
      const end = DateService.toISO(DateService.addDays(DateService.fromISO(weekStart), 6));
      if (weekStart > today) return [];
      const last = end < today ? end : today;
      const days = [];
      for (let date = DateService.fromISO(weekStart); DateService.toISO(date) <= last; date = DateService.addDays(date, 1)) {
        days.push(DateService.toISO(date));
      }
      return days;
    },

    timeToMinutes(value) {
      const match = /^(\d{2}):(\d{2})$/.exec(value || "");
      return match ? Number(match[1]) * 60 + Number(match[2]) : NaN;
    },

    scheduleSummary(records, date, currentTime) {
      const todayRecords = records.filter((record) => record.date === date);
      const meetings = todayRecords.filter((record) => (record.column === "fixed" || record.type === "meeting") && record.endTime > currentTime).length;
      const intervals = todayRecords.map((record) => [this.timeToMinutes(record.startTime), this.timeToMinutes(record.endTime)])
        .filter(([start, end]) => Number.isFinite(start) && Number.isFinite(end) && end > start)
        .map(([start, end]) => [Math.max(360, start), Math.min(1440, end)])
        .filter(([start, end]) => end > start)
        .sort((a, b) => a[0] - b[0]);
      const merged = [];
      intervals.forEach((interval) => {
        const last = merged[merged.length - 1];
        if (!last || interval[0] > last[1]) merged.push([...interval]);
        else last[1] = Math.max(last[1], interval[1]);
      });
      const plannedHours = merged.reduce((sum, [start, end]) => sum + end - start, 0) / 60;
      return { meetings, plannedHours, freeHours: Math.max(0, 18 - plannedHours) };
    },

    analytics(week, habits) {
      const goals = week.goals.filter(Boolean);
      const goalsProgress = Math.round(week.goals.reduce((sum, goal) => sum + this.goalProgress(goal), 0) / 4);
      const tasks = Object.values(week.days || {}).flatMap((day) => [
        ...(Array.isArray(day?.mainTasks) ? day.mainTasks : []),
        ...(Array.isArray(day?.otherTasks) ? day.otherTasks : [])
      ]);
      const taskProgress = tasks.length ? Math.round(tasks.filter((task) => task.isCompleted).length / tasks.length * 100) : 0;
      const availableDays = this.habitAvailability(week.weekStart);
      const activeHabits = habits.slots.filter((slot) => this.effectiveHabitName(slot, week.weekStart).trim());
      const availableMarks = activeHabits.length * availableDays.length;
      const doneMarks = activeHabits.reduce((sum, slot) => sum + availableDays.filter((date) => week.habitMarks?.[slot.id]?.[date] === "done").length, 0);
      const habitProgress = availableMarks ? Math.round(doneMarks / availableMarks * 100) : 0;
      const categories = [];
      if (goals.length) categories.push(goalsProgress);
      if (tasks.length) categories.push(taskProgress);
      if (activeHabits.length && availableDays.length) categories.push(habitProgress);
      return {
        goalsProgress,
        goalsHaveData: goals.length > 0,
        taskProgress,
        tasksHaveData: tasks.length > 0,
        habitProgress,
        habitsHaveData: activeHabits.length > 0 && availableDays.length > 0,
        overallProgress: categories.length ? Math.round(categories.reduce((sum, value) => sum + value, 0) / categories.length) : 0,
        availableDays,
        activeHabits,
        doneMarks,
        availableMarks,
        tasks
      };
    }
  };

  const RecurrenceService = {
    normalize(value) {
      const items = value?.schemaVersion === 1 && Array.isArray(value.items) ? value.items.map((item) => {
        if (!item || typeof item.title !== "string" || !item.title.trim() || !DateService.fromISO(item.startDate) || !["daily", "weekly"].includes(item.rule)) return null;
        const type = item.type === "note" ? "note" : (item.column === "fixed" ? "fixed" : "flexible");
        if (type !== "note" && !PlannerDataService.validateTimeRange(item.startTime, item.endTime).valid) return null;
        return { id: typeof item.id === "string" ? item.id : PlannerDataService.id(), title: item.title.slice(0, 300), description: typeof item.description === "string" ? item.description.slice(0, 10000) : "",
          startDate: item.startDate, startTime: type === "note" ? null : item.startTime, endTime: type === "note" ? null : item.endTime, type, column: type === "note" ? null : type,
          color: PlannerDataService.palette.includes(item.color) ? item.color : "royalIndigo", rule: item.rule, until: DateService.fromISO(item.until) && item.until >= item.startDate ? item.until : null,
          hashtags: PlannerDataService.normalizeHashtags(Array.isArray(item.hashtags) ? item.hashtags.join(" ") : ""), fileNames: PlannerDataService.mergeFileNames([], item.fileNames).names, goalId: null, habitId: null,
          reminders: item.reminders || { before15: false, atStart: false }, exceptions: item.exceptions && typeof item.exceptions === "object" ? item.exceptions : {}, createdAt: item.createdAt || new Date().toISOString(), updatedAt: item.updatedAt || new Date().toISOString() };
      }).filter(Boolean) : [];
      return { schemaVersion: 1, items };
    },

    occurs(series, date) {
      if (!DateService.fromISO(date) || date < series.startDate || (series.until && date > series.until)) return false;
      const start = DateService.fromISO(series.startDate); const target = DateService.fromISO(date); const days = Math.round((target - start) / 86400000);
      return series.rule === "daily" ? days >= 0 : days >= 0 && days % 7 === 0;
    },

    instance(series, date) {
      if (!this.occurs(series, date) || series.exceptions?.[date]?.deleted) return null;
      const override = series.exceptions?.[date]?.override || {};
      return { ...series, ...override, id: `${series.id}@${date}`, seriesId: series.id, recurrenceDate: date, date, recurrence: series.rule, isRecurrenceInstance: true };
    },

    forDate(collection, date) { return collection.items.map((series) => this.instance(series, date)).filter(Boolean); },
    previousDate(series, date) { return DateService.toISO(DateService.addDays(DateService.fromISO(date), series.rule === "daily" ? -1 : -7)); }
  };

  const SearchService = {
    typeLabelKey(type) { return ({ goal: "search.goals", subtask: "search.subtasks", habit: "search.habits", task: "search.tasks", fixed: "search.meetings", flexible: "search.flexible", note: "search.notes", ideal: "search.ideal", series: "search.series" })[type] || "search.notes"; },

    collect(habits, seriesCollection, notes) {
      const results = []; const index = StorageService.read(StorageService.keys.weekIndex, []);
      (Array.isArray(index) ? index : []).forEach(({ weekStart }) => {
        const week = PlannerDataService.normalizeWeek(StorageService.read(StorageService.weekKey(weekStart), null), weekStart);
        week.goals.forEach((goal, goalIndex) => { if (!goal) return; results.push({ type: "goal", id: goal.id, title: goal.title, text: goal.description, weekStart, date: weekStart, hashtags: [], files: [], goalIndex }); goal.subtasks.forEach((item, subtaskIndex) => results.push({ type: "subtask", id: item.id, title: item.text, text: "", weekStart, date: weekStart, hashtags: item.hashtags, files: [], goalIndex, subtaskIndex, isCompleted: item.isCompleted })); });
        Object.entries(week.days).forEach(([date, day]) => ["mainTasks", "otherTasks"].forEach((key) => day[key].forEach((task) => results.push({ type: "task", id: task.id, title: task.title, text: task.text, weekStart, date, hashtags: task.hashtags, files: task.fileNames, isCompleted: task.isCompleted }))));
        week.records.forEach((record) => results.push({ type: record.type || record.column || "flexible", id: record.id, title: record.title, text: record.description, weekStart, date: record.date, time: record.startTime ? `${record.startTime}–${record.endTime}` : "", hashtags: record.hashtags, files: record.fileNames }));
        week.idealItems.forEach((item) => results.push({ type: "ideal", id: item.id, title: item.title, text: item.description, weekStart, date: weekStart, time: `${item.startTime}–${item.endTime}`, hashtags: [], files: [], dayOfWeek: item.dayOfWeek }));
      });
      habits.slots.forEach((slot) => slot.versions.forEach((version) => { if (version.name.trim()) results.push({ type: "habit", id: slot.id, title: version.name, text: "", weekStart: version.weekStart, date: version.weekStart, hashtags: [], files: [] }); }));
      notes.items.forEach((item) => results.push({ type: "note", id: item.id, title: item.title, text: item.description, date: "", hashtags: item.hashtags, files: [], globalNote: true }));
      seriesCollection.items.forEach((series) => results.push({ type: "series", id: series.id, title: series.title, text: series.description, date: series.startDate, time: series.startTime ? `${series.startTime}–${series.endTime}` : "", hashtags: series.hashtags, files: series.fileNames, recurrence: series.rule }));
      return results;
    },

    filter(items, filters) {
      const query = filters.query.trim().toLocaleLowerCase(); const tags = PlannerDataService.normalizeHashtags(filters.tags).map((tag) => tag.toLocaleLowerCase());
      return items.filter((item) => {
        if (filters.type !== "all" && item.type !== filters.type) return false;
        if (filters.completion !== "all" && (item.type !== "task" || Boolean(item.isCompleted) !== (filters.completion === "done"))) return false;
        if (filters.from && (!item.date || item.date < filters.from)) return false;
        if (filters.to && (!item.date || item.date > filters.to)) return false;
        const itemTags = (item.hashtags || []).map((tag) => tag.replace(/^#/, "").toLocaleLowerCase());
        if (tags.length && !tags.every((tag) => itemTags.includes(tag.replace(/^#/, "")))) return false;
        const haystack = [item.title, item.text, ...(item.hashtags || []), ...(item.files || [])].join(" ").toLocaleLowerCase();
        return !query || haystack.includes(query.replace(/^#/, ""));
      }).sort((a, b) => (b.date || "").localeCompare(a.date || "") || a.title.localeCompare(b.title));
    }
  };

  const ReminderService = {
    fired: new Set(), timer: null, controller: null,
    start(controller) { this.controller = controller; this.check(); this.timer = window.setInterval(() => this.check(), 15000); },
    check() {
      const now = new Date(); const date = DateService.todayISO(); const minutes = now.getHours() * 60 + now.getMinutes(); const due = [];
      this.controller.recordsForDate(date).forEach((record) => {
        if (!record.startTime || !record.reminders) return; const start = PlannerDataService.timeToMinutes(record.startTime);
        [["before15", start - 15], ["atStart", start]].forEach(([kind, target]) => { const key = `${record.id}:${date}:${kind}`; if (record.reminders[kind] && target === minutes && !this.fired.has(key)) { this.fired.add(key); due.push(record); } });
      });
      if (due.length) this.controller.showReminderGroup(due);
    }
  };

  const AppController = {
    state: null,
    onboardingStep: 0,
    lastFocusedElement: null,
    confirmationAction: null,
    confirmationCancelAction: null,
    confirmationFocusedElement: null,
    panelAction: null,
    panelDirty: false,
    draggedGoalIndex: null,
    draggedSubtask: null,
    habits: null,
    currentWeek: null,
    notes: null,
    seriesCollection: null,
    searchTimer: null,
    activeRecognition: null,
    draggedTask: null,
    draggedRecord: null,
    draggedIdealItem: null,
    scheduleScrolled: false,
    pendingDataAction: null,
    backupDownloaded: false,
    backupFocusedElement: null,
    corruptDownloaded: false,
    importCandidate: null,

    elements: {},

    start() {
      this.cacheElements();
      StorageService.onStatus = (status) => this.renderSaveStatus(status);
      StorageService.onError = (error) => this.showToast(error?.name === "QuotaExceededError" ? "toast.quotaTitle" : "toast.saveErrorTitle", error?.name === "QuotaExceededError" ? "toast.quotaCopy" : "toast.saveErrorCopy", "error", 7000);
      StorageService.onUsage = () => this.renderStorageUsage();
      this.state = StorageService.initialize();
      this.state.ui.view = "overview";
      this.state.ui.selectedDate = DateService.todayISO();
      this.state.ui.selectedWeek = DateService.toISO(DateService.startOfWeek(new Date()));
      this.habits = PlannerDataService.normalizeHabits(StorageService.read(StorageService.keys.habits, null));
      this.notes = PlannerDataService.normalizeNotes(StorageService.read(StorageService.keys.notes, null));
      this.seriesCollection = RecurrenceService.normalize(StorageService.read(StorageService.keys.series, null));
      this.loadWeek(this.state.ui.selectedWeek);
      const legacyIdealWeek = PlannerDataService.normalizeIdealWeek(StorageService.read(StorageService.keys.idealWeek, null));
      if (legacyIdealWeek.items.length) {
        legacyIdealWeek.items.forEach((item) => { if (!this.currentWeek.idealItems.some((current) => current.id === item.id)) this.currentWeek.idealItems.push(structuredClone(item)); });
        this.saveWeek(true);
        StorageService.writeNow(StorageService.keys.idealWeek, { schemaVersion: 1, items: [], copiedWeekStarts: [] });
      }

      I18nService.setLanguage(this.state.settings.language);
      ThemeService.apply(this.state.settings.theme);
      this.bindEvents();
      this.syncSettingsControls();
      this.applySidebarState(false);
      this.renderAll();
      this.elements.app.hidden = false;
      this.renderBusinessCard();
      this.observeEditorForms();
      ReminderService.start(this);

      this.checkTimeZone();
      if (StorageService.faults.length) {
        this.showRecoveryScreen();
      }

      if (!StorageService.faults.length && !this.state.meta.onboardingCompleted) this.showOnboarding(0);
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
        exportDataButton: byId("exportDataButton"),
        importDataButton: byId("importDataButton"),
        importDataFile: byId("importDataFile"),
        clearSelectedWeekButton: byId("clearSelectedWeekButton"),
        clearOldWeeksButton: byId("clearOldWeeksButton"),
        clearAllDataButton: byId("clearAllDataButton"),
        oldWeekCutoff: byId("oldWeekCutoff"),
        oldWeekCount: byId("oldWeekCount"),
        storageUsageText: byId("storageUsageText"),
        storageUsageBar: byId("storageUsageBar"),
        storageSummary: byId("storageSummary"),
        storageWeekCount: byId("storageWeekCount"),
        storageWarning: byId("storageWarning"),
        greeting: byId("greeting"),
        dayKicker: byId("dayKicker"),
        dayHeading: byId("dayHeading"),
        quickAddGoal: byId("quickAddGoal"),
        weekProgressOrbit: byId("weekProgressOrbit"),
        weekProgressValue: byId("weekProgressValue"),
        weekProgressCaption: byId("weekProgressCaption"),
        goalsMetric: byId("goalsMetric"),
        habitsMetric: byId("habitsMetric"),
        todayTasksMetric: byId("todayTasksMetric"),
        meetingsMetric: byId("meetingsMetric"),
        plannedMetric: byId("plannedMetric"),
        freeMetric: byId("freeMetric"),
        overviewGoalList: byId("overviewGoalList"),
        overviewGoalsEmpty: byId("overviewGoalsEmpty"),
        overviewHabitList: byId("overviewHabitList"),
        overviewHabitsEmpty: byId("overviewHabitsEmpty"),
        goalBoard: byId("goalBoard"),
        habitTable: byId("habitTable"),
        addHabitButton: byId("addHabitButton"),
        weekBoardNote: byId("weekBoardNote"),
        mainTaskCapacity: byId("mainTaskCapacity"),
        otherTaskCapacity: byId("otherTaskCapacity"),
        mainTaskList: byId("mainTaskList"),
        otherTaskList: byId("otherTaskList"),
        addMainTask: byId("addMainTask"),
        addOtherTask: byId("addOtherTask"),
        scheduleScale: byId("scheduleScale"),
        dayScheduleScroll: byId("dayScheduleScroll"),
        daySchedule: byId("daySchedule"),
        idealHead: byId("idealHead"),
        idealScheduleScroll: byId("idealScheduleScroll"),
        idealSchedule: byId("idealSchedule"),
        idealEmpty: byId("idealEmpty"),
        copyIdealWeek: byId("copyIdealWeek"),
        addNoteButton: byId("addNoteButton"),
        notesList: byId("notesList"),
        notesEmpty: byId("notesEmpty"),
        searchInput: byId("searchInput"),
        searchEmpty: byId("searchEmpty"),
        searchType: byId("searchType"),
        searchCompletion: byId("searchCompletion"),
        searchDateFrom: byId("searchDateFrom"),
        searchDateTo: byId("searchDateTo"),
        searchTags: byId("searchTags"),
        searchResults: byId("searchResults"),
        speechLanguageSelect: byId("speechLanguageSelect"),
        speechConsentToggle: byId("speechConsentToggle"),
        businessCardForm: byId("businessCardForm"),
        businessCardPreview: byId("businessCardPreview"),
        businessCardError: byId("businessCardError"),
        telegramModal: byId("telegramModal"),
        telegramPreviewBody: byId("telegramPreviewBody"),
        closeTelegram: byId("closeTelegram"),
        telegramDone: byId("telegramDone"),
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
        confirmTitle: byId("confirmTitle"),
        confirmText: byId("confirmText"),
        confirmCancel: byId("confirmCancel"),
        confirmAccept: byId("confirmAccept"),
        backupDialog: byId("backupDialog"),
        backupDialogText: byId("backupDialogText"),
        backupDownloadButton: byId("backupDownloadButton"),
        backupSavedCheck: byId("backupSavedCheck"),
        backupCancelButton: byId("backupCancelButton"),
        backupContinueButton: byId("backupContinueButton"),
        deletePhraseField: byId("deletePhraseField"),
        deletePhraseInput: byId("deletePhraseInput"),
        recoveryScreen: byId("recoveryScreen"),
        downloadCorruptButton: byId("downloadCorruptButton"),
        retryRecoveryButton: byId("retryRecoveryButton"),
        recoveryImportButton: byId("recoveryImportButton"),
        recoveryResetButton: byId("recoveryResetButton"),
        toastRegion: byId("toastRegion")
      };
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
      this.elements.quickAddGoal.addEventListener("click", () => this.addGoalFromFirstEmpty(this.elements.quickAddGoal));
      this.elements.addHabitButton.addEventListener("click", () => this.addHabitFromFirstEmpty(this.elements.addHabitButton));
      this.elements.goalBoard.addEventListener("click", (event) => this.handleGoalBoardClick(event));
      this.elements.habitTable.addEventListener("click", (event) => this.handleHabitTableClick(event));
      this.elements.addMainTask.addEventListener("click", () => this.openTaskEditor(null, "main", this.elements.addMainTask));
      this.elements.addOtherTask.addEventListener("click", () => this.openTaskEditor(null, "other", this.elements.addOtherTask));
      [this.elements.mainTaskList, this.elements.otherTaskList].forEach((list) => {
        list.addEventListener("click", (event) => this.handleTaskClick(event));
        list.addEventListener("dragstart", (event) => this.handleTaskDragStart(event));
        list.addEventListener("dragover", (event) => this.handleTaskDragOver(event));
        list.addEventListener("drop", (event) => this.handleTaskDrop(event));
        list.addEventListener("dragend", () => { this.draggedTask = null; });
      });
      this.elements.daySchedule.addEventListener("click", (event) => this.handleScheduleClick(event));
      this.elements.daySchedule.addEventListener("dragover", (event) => { if (event.target.closest("[data-slot-time]")) event.preventDefault(); });
      this.elements.daySchedule.addEventListener("drop", (event) => this.handleScheduleDrop(event));
      this.elements.daySchedule.addEventListener("dragstart", (event) => this.handleScheduleDragStart(event));
      this.elements.daySchedule.addEventListener("dragend", () => { this.draggedRecord = null; this.draggedTask = null; });
      this.elements.daySchedule.addEventListener("pointerdown", (event) => this.handleResizeStart(event, "record"));
      this.elements.idealSchedule.addEventListener("click", (event) => this.handleIdealClick(event));
      this.elements.idealSchedule.addEventListener("dragover", (event) => { if (event.target.closest("[data-slot-time]")) event.preventDefault(); });
      this.elements.idealSchedule.addEventListener("drop", (event) => this.handleIdealDrop(event));
      this.elements.idealSchedule.addEventListener("dragstart", (event) => this.handleIdealDragStart(event));
      this.elements.idealSchedule.addEventListener("dragend", () => { this.draggedIdealItem = null; });
      this.elements.idealSchedule.addEventListener("pointerdown", (event) => this.handleResizeStart(event, "ideal"));
      this.elements.copyIdealWeek.addEventListener("click", () => this.openCopyIdealEditor(this.elements.copyIdealWeek));
      this.elements.addNoteButton.addEventListener("click", () => this.openGlobalNoteEditor(null, this.elements.addNoteButton));
      this.elements.notesEmpty.addEventListener("click", () => this.openGlobalNoteEditor(null, this.elements.notesEmpty));
      this.elements.notesList.addEventListener("click", (event) => { const row = event.target.closest("[data-note-id]"); const note = row && this.notes.items.find((item) => item.id === row.dataset.noteId); if (note) this.openGlobalNoteEditor(note, row); });
      this.elements.scheduleScale.addEventListener("change", (event) => this.updateScheduleScale(event.target.value));
      this.elements.goalBoard.addEventListener("dragstart", (event) => this.handlePlannerDragStart(event));
      this.elements.goalBoard.addEventListener("dragover", (event) => this.handlePlannerDragOver(event));
      this.elements.goalBoard.addEventListener("dragleave", (event) => event.target.closest(".is-drop-target")?.classList.remove("is-drop-target"));
      this.elements.goalBoard.addEventListener("drop", (event) => this.handlePlannerDrop(event));
      this.elements.goalBoard.addEventListener("dragend", () => this.clearPlannerDragState());

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
      [this.elements.searchInput, this.elements.searchType, this.elements.searchCompletion, this.elements.searchDateFrom, this.elements.searchDateTo, this.elements.searchTags].forEach((control) => control.addEventListener("input", () => this.scheduleSearch()));
      this.elements.searchResults.addEventListener("click", (event) => this.handleSearchResultClick(event));
      this.elements.speechLanguageSelect.addEventListener("change", (event) => { this.state.settings.speechLanguage = event.target.value; this.saveSettings(); });
      this.elements.speechConsentToggle.addEventListener("click", () => this.toggleSpeechConsent());
      this.elements.businessCardForm.addEventListener("submit", (event) => this.saveBusinessCard(event));
      document.querySelectorAll("[data-card-variant]").forEach((button) => button.addEventListener("click", () => { this.state.settings.cardVariant = button.dataset.cardVariant; this.saveSettings(); this.renderBusinessCard(); }));
      this.elements.exportDataButton.addEventListener("click", () => this.downloadBackup());
      this.elements.importDataButton.addEventListener("click", () => this.elements.importDataFile.click());
      this.elements.importDataFile.addEventListener("change", (event) => this.handleImportFile(event));
      this.elements.oldWeekCutoff.addEventListener("change", () => this.renderStorageUsage());
      this.elements.clearSelectedWeekButton.addEventListener("click", (event) => this.requestClearSelectedWeek(event.currentTarget));
      this.elements.clearOldWeeksButton.addEventListener("click", (event) => this.requestClearOldWeeks(event.currentTarget));
      this.elements.clearAllDataButton.addEventListener("click", (event) => this.requestClearAllData(event.currentTarget));
      this.elements.backupDownloadButton.addEventListener("click", () => { if (this.downloadBackup()) { this.backupDownloaded = true; this.updateBackupContinue(); this.showToast("backup.downloaded", "backup.downloadedCopy"); } });
      this.elements.backupSavedCheck.addEventListener("change", () => this.updateBackupContinue());
      this.elements.deletePhraseInput.addEventListener("input", () => this.updateBackupContinue());
      this.elements.backupCancelButton.addEventListener("click", () => this.closeBackupWorkflow());
      this.elements.backupContinueButton.addEventListener("click", () => this.continueBackupWorkflow());
      this.elements.downloadCorruptButton.addEventListener("click", () => { if (this.downloadJson(StorageService.corruptSnapshot(), `premium-planner-corrupt-${DateService.todayISO()}.json`)) { this.corruptDownloaded = true; this.elements.recoveryResetButton.disabled = false; } });
      this.elements.retryRecoveryButton.addEventListener("click", () => window.location.reload());
      this.elements.recoveryImportButton.addEventListener("click", () => this.elements.importDataFile.click());
      this.elements.recoveryResetButton.addEventListener("click", () => this.requestRecoveryReset());
      this.elements.closeTelegram.addEventListener("click", () => this.closeTelegramPreview());
      this.elements.telegramDone.addEventListener("click", () => this.closeTelegramPreview());
      this.elements.telegramModal.addEventListener("click", (event) => { if (event.target === this.elements.telegramModal) this.closeTelegramPreview(); });

      this.elements.restartOnboarding.addEventListener("click", () => {
        this.openConfirmation(() => this.showOnboarding(0));
      });
      this.elements.confirmCancel.addEventListener("click", () => {
        const cancelAction = this.confirmationCancelAction;
        this.closeConfirmation();
        cancelAction?.();
      });
      this.elements.confirmAccept.addEventListener("click", () => {
        const action = this.confirmationAction;
        this.closeConfirmation();
        action?.();
      });

      this.elements.closeContextPanel.addEventListener("click", () => this.closeContextPanel());
      this.elements.contextPanelDone.addEventListener("click", () => this.panelAction?.());
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
        const activeDialog = !this.elements.backupDialog.hidden ? this.elements.backupDialog : !this.elements.confirmDialog.hidden ? this.elements.confirmDialog : !this.elements.telegramModal.hidden ? this.elements.telegramModal : !this.elements.recoveryScreen.hidden ? this.elements.recoveryScreen : this.elements.contextPanel.getAttribute("aria-hidden") === "false" ? this.elements.contextPanel : null;
        if (event.key === "Tab" && activeDialog) { this.trapFocus(event, activeDialog); return; }
        if (event.key !== "Escape") return;
        if (!this.elements.backupDialog.hidden) this.closeBackupWorkflow();
        else if (!this.elements.telegramModal.hidden) this.closeTelegramPreview();
        else if (!this.elements.confirmDialog.hidden) this.closeConfirmation();
        else if (this.elements.contextPanel.getAttribute("aria-hidden") === "false") this.closeContextPanel();
      });
      window.addEventListener("beforeunload", () => StorageService.flush());
    },

    renderAll() {
      I18nService.setLanguage(this.state.settings.language);
      this.renderWeekNavigation();
      this.renderGreeting();
      this.renderDayHeading();
      this.renderIdealHead();
      this.renderPlannerData();
      this.renderSearchState();
      this.renderBusinessCard();
      this.showView(this.state.ui.view, false);
      this.renderAriaLabels();
      this.renderSaveStatus("saved");
      this.syncSettingsControls();
      this.renderStorageUsage();
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
        button.addEventListener("dragover", (event) => { if (this.draggedRecord) event.preventDefault(); });
        button.addEventListener("drop", (event) => {
          if (!this.draggedRecord) return;
          event.preventDefault();
          const record = this.recordsForDate(this.state.ui.selectedDate).find((item) => item.id === this.draggedRecord);
          if (record) this.moveScheduleRecord(record, iso, record.column, record.startTime);
          this.draggedRecord = null;
        });
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

    loadWeek(weekStart) {
      const key = StorageService.weekKey(weekStart);
      this.currentWeek = PlannerDataService.normalizeWeek(StorageService.read(key, null), weekStart);
    },

    saveWeek(immediate = false) {
      this.currentWeek.updatedAt = new Date().toISOString();
      const key = StorageService.weekKey(this.currentWeek.weekStart);
      const weekIndex = StorageService.read(StorageService.keys.weekIndex, []);
      const normalizedIndex = Array.isArray(weekIndex) ? weekIndex.filter((item) => typeof item?.weekStart === "string") : [];
      const existing = normalizedIndex.find((item) => item.weekStart === this.currentWeek.weekStart);
      if (existing) existing.updatedAt = this.currentWeek.updatedAt;
      else normalizedIndex.push({ weekStart: this.currentWeek.weekStart, updatedAt: this.currentWeek.updatedAt });
      normalizedIndex.sort((a, b) => a.weekStart.localeCompare(b.weekStart));
      if (!existing) {
        if (immediate) StorageService.writeNow(StorageService.keys.weekIndex, normalizedIndex);
        else StorageService.schedule(StorageService.keys.weekIndex, normalizedIndex);
      }
      if (immediate) StorageService.writeNow(key, this.currentWeek);
      else StorageService.schedule(key, this.currentWeek);
    },

    saveHabits() {
      StorageService.schedule(StorageService.keys.habits, this.habits);
    },

    renderPlannerData() {
      this.renderGoals();
      this.renderHabits();
      this.renderOverview();
      this.renderDay();
      this.renderIdealWeek();
      this.renderNotes();
      const hasGoals = this.currentWeek.goals.some(Boolean);
      const hasHabits = this.habits.slots.some((slot) => PlannerDataService.effectiveHabitName(slot, this.currentWeek.weekStart).trim());
      this.elements.weekBoardNote.hidden = hasGoals || hasHabits;
    },

    createIconButton(action, labelKey, path, disabled = false) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "mini-icon-button";
      button.dataset.action = action;
      button.disabled = disabled;
      button.setAttribute("aria-label", I18nService.t(labelKey));
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("aria-hidden", "true");
      svg.setAttribute("viewBox", "0 0 24 24");
      const iconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      iconPath.setAttribute("d", path);
      svg.append(iconPath);
      button.append(svg);
      return button;
    },

    renderGoals() {
      this.elements.goalBoard.replaceChildren();
      this.currentWeek.goals.forEach((goal, index) => {
        if (!goal) {
          const card = document.createElement("article");
          card.className = "empty-goal-card";
          card.dataset.goalIndex = String(index);
          card.draggable = true;
          const number = document.createElement("span");
          number.textContent = String(index + 1).padStart(2, "0");
          const content = document.createElement("div");
          const title = document.createElement("h3");
          title.textContent = I18nService.t("week.goalPlaceholder");
          const text = document.createElement("p");
          text.textContent = I18nService.t("week.goalHint");
          const add = document.createElement("button");
          add.type = "button";
          add.className = "primary-button";
          add.dataset.action = "add-goal";
          add.textContent = I18nService.t("week.addGoalSlot");
          content.append(title, text, add);
          card.append(number, content);
          this.elements.goalBoard.append(card);
          return;
        }

        const card = document.createElement("article");
        card.className = "goal-card";
        card.dataset.goalIndex = String(index);
        card.dataset.color = goal.color;
        card.draggable = true;

        const head = document.createElement("div");
        head.className = "goal-card-head";
        const number = document.createElement("span");
        number.className = "goal-card-index";
        number.textContent = String(index + 1).padStart(2, "0");
        const menu = document.createElement("div");
        menu.className = "goal-card-menu";
        menu.append(
          this.createIconButton("goal-left", "actions.moveLeft", "m14 6-6 6 6 6", index === 0),
          this.createIconButton("goal-right", "actions.moveRight", "m10 6 6 6-6 6", index === 3),
          this.createIconButton("edit-goal", "actions.edit", "M4 20h4L19 9l-4-4L4 16v4Zm9-13 4 4"),
          this.createIconButton("clear-goal", "actions.clear", "M4 7h16M9 7V4h6v3m-8 0 1 13h8l1-13")
        );
        head.append(number, menu);

        const title = document.createElement("h3");
        title.textContent = goal.title;
        const description = document.createElement("p");
        description.className = "goal-description";
        description.textContent = goal.description || (goal.subtasks.length ? "" : I18nService.t("week.noSubtasks"));
        const progress = PlannerDataService.goalProgress(goal);
        const progressRow = document.createElement("div");
        progressRow.className = "goal-progress-row";
        const progressLabel = document.createElement("span");
        progressLabel.textContent = I18nService.t("week.goalProgress");
        const progressValue = document.createElement("strong");
        progressValue.textContent = `${progress}%`;
        progressRow.append(progressLabel, progressValue);
        const progressBar = document.createElement("div");
        progressBar.className = "goal-progress";
        progressBar.setAttribute("role", "progressbar");
        progressBar.setAttribute("aria-valuenow", String(progress));
        progressBar.setAttribute("aria-valuemin", "0");
        progressBar.setAttribute("aria-valuemax", "100");
        const progressFill = document.createElement("span");
        progressFill.style.width = `${progress}%`;
        progressBar.append(progressFill);

        const list = document.createElement("ul");
        list.className = "subtask-list";
        goal.subtasks.forEach((subtask, subtaskIndex) => {
          const item = document.createElement("li");
          item.className = "subtask-item";
          item.dataset.goalIndex = String(index);
          item.dataset.subtaskIndex = String(subtaskIndex);
          item.draggable = true;
          const check = document.createElement("button");
          check.type = "button";
          check.className = `subtask-check${subtask.isCompleted ? " is-complete" : ""}`;
          check.dataset.action = "toggle-subtask";
          check.setAttribute("aria-label", `${subtask.text}: ${I18nService.t(subtask.isCompleted ? "habit.state.done" : "habit.state.unmarked")}`);
          if (subtask.isCompleted) {
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute("aria-hidden", "true");
            svg.setAttribute("viewBox", "0 0 24 24");
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("d", "m5 12 4 4L19 6");
            svg.append(path);
            check.append(svg);
          }
          const copy = document.createElement("div");
          copy.className = `subtask-copy${subtask.isCompleted ? " is-complete" : ""}`;
          copy.textContent = subtask.text;
          if (subtask.hashtags.length) {
            const tags = document.createElement("span");
            tags.className = "subtask-tags";
            tags.textContent = subtask.hashtags.map((tag) => `#${tag.replace(/^#/, "")}`).join(" ");
            copy.append(tags);
          }
          const controls = document.createElement("div");
          controls.className = "subtask-controls";
          controls.append(
            this.createIconButton("subtask-up", "actions.moveUp", "m6 14 6-6 6 6", subtaskIndex === 0),
            this.createIconButton("subtask-down", "actions.moveDown", "m6 10 6 6 6-6", subtaskIndex === goal.subtasks.length - 1),
            this.createIconButton("edit-subtask", "actions.edit", "M4 20h4L19 9l-4-4L4 16v4"),
            this.createIconButton("delete-subtask", "actions.delete", "M5 7h14M9 7V4h6v3m-8 0 1 13h8l1-13")
          );
          item.append(check, copy, controls);
          list.append(item);
        });
        const addSubtask = document.createElement("button");
        addSubtask.type = "button";
        addSubtask.className = "goal-add-subtask";
        addSubtask.dataset.action = "add-subtask";
        addSubtask.textContent = `+ ${I18nService.t("actions.addSubtask")}`;
        card.append(head, title, description, progressRow, progressBar, list, addSubtask);
        this.elements.goalBoard.append(card);
      });
    },

    renderHabits() {
      const table = this.elements.habitTable;
      table.replaceChildren();
      const language = this.state.settings.language;
      const locale = language === "ru" ? "ru-RU" : "en-US";
      const days = DateService.weekDays(DateService.fromISO(this.currentWeek.weekStart));
      const head = document.createElement("div");
      head.className = "habit-table-head";
      const habitHead = document.createElement("span");
      habitHead.textContent = I18nService.t("week.habit");
      head.append(habitHead);
      days.forEach((date) => {
        const label = document.createElement("span");
        const weekday = new Intl.DateTimeFormat(locale, { weekday: "short" }).format(date).replace(".", "");
        label.textContent = `${weekday} ${date.getDate()}`;
        head.append(label);
      });
      const total = document.createElement("span");
      total.textContent = I18nService.t("week.weekResult");
      head.append(total);
      table.append(head);

      const availableDays = PlannerDataService.habitAvailability(this.currentWeek.weekStart);
      this.habits.slots.forEach((slot, slotIndex) => {
        const name = PlannerDataService.effectiveHabitName(slot, this.currentWeek.weekStart).trim();
        const row = document.createElement("div");
        row.className = "habit-data-row";
        row.dataset.habitIndex = String(slotIndex);
        const nameButton = document.createElement("button");
        nameButton.type = "button";
        nameButton.className = `habit-name-button${name ? "" : " is-empty"}`;
        nameButton.dataset.action = "edit-habit";
        nameButton.textContent = name || I18nService.t("week.addHabitSlot");
        row.append(nameButton);

        days.forEach((date) => {
          const iso = DateService.toISO(date);
          const state = this.currentWeek.habitMarks?.[slot.id]?.[iso] || "unmarked";
          const button = document.createElement("button");
          button.type = "button";
          button.className = `habit-mark is-${state}`;
          button.dataset.action = "cycle-habit";
          button.dataset.date = iso;
          button.disabled = !name || iso > DateService.todayISO();
          const stateLabel = I18nService.t(`habit.state.${state}`);
          button.title = button.disabled && iso > DateService.todayISO() ? I18nService.t("habit.future") : stateLabel;
          button.setAttribute("aria-label", `${name || I18nService.t("week.habit")} · ${DateService.dayHeading(date, language)} · ${stateLabel}`);
          if (state !== "unmarked") {
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute("aria-hidden", "true");
            svg.setAttribute("viewBox", "0 0 24 24");
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("d", state === "done" ? "m5 12 4 4L19 6" : "m7 7 10 10M17 7 7 17");
            svg.append(path);
            button.append(svg);
          }
          row.append(button);
        });

        const done = name ? availableDays.filter((date) => this.currentWeek.habitMarks?.[slot.id]?.[date] === "done").length : 0;
        const summary = document.createElement("span");
        summary.className = "habit-summary";
        summary.textContent = name && availableDays.length
          ? I18nService.t("week.habitSummary", { done, available: availableDays.length })
          : I18nService.t("week.noData");
        row.append(summary);
        table.append(row);
      });
    },

    renderOverview() {
      const analytics = PlannerDataService.analytics(this.currentWeek, this.habits);
      const language = this.state.settings.language;
      const hoursSuffix = language === "ru" ? "ч" : "h";
      this.elements.weekProgressValue.textContent = `${analytics.overallProgress}%`;
      this.elements.weekProgressOrbit.setAttribute("aria-label", I18nService.t("overview.progressAria", { value: analytics.overallProgress }));
      this.elements.weekProgressCaption.textContent = analytics.goalsHaveData || analytics.tasksHaveData || analytics.habitsHaveData
        ? I18nService.t("overview.progress")
        : I18nService.t("overview.addData");
      this.elements.goalsMetric.textContent = `${analytics.goalsProgress}%`;
      this.elements.habitsMetric.textContent = analytics.habitsHaveData ? `${analytics.habitProgress}%` : "—";

      const today = DateService.todayISO();
      const todayData = this.currentWeek.days?.[today] || {};
      const todayTasks = [
        ...(Array.isArray(todayData.mainTasks) ? todayData.mainTasks : []),
        ...(Array.isArray(todayData.otherTasks) ? todayData.otherTasks : [])
      ];
      const completedToday = todayTasks.filter((task) => task.isCompleted).length;
      this.elements.todayTasksMetric.textContent = language === "ru" ? `${completedToday} из ${todayTasks.length}` : `${completedToday} of ${todayTasks.length}`;

      const todayRecords = this.recordsForDate(today);
      const now = new Date();
      const currentTime = `${DateService.pad(now.getHours())}:${DateService.pad(now.getMinutes())}`;
      const schedule = PlannerDataService.scheduleSummary(todayRecords, today, currentTime);
      this.elements.meetingsMetric.textContent = String(schedule.meetings);
      this.elements.plannedMetric.textContent = `${this.formatHours(schedule.plannedHours)} ${hoursSuffix}`;
      this.elements.freeMetric.textContent = `${this.formatHours(schedule.freeHours)} ${hoursSuffix}`;

      this.elements.overviewGoalList.replaceChildren();
      const activeGoals = this.currentWeek.goals.filter(Boolean);
      this.elements.overviewGoalsEmpty.hidden = activeGoals.length > 0;
      activeGoals.forEach((goal) => {
        const row = document.createElement("div");
        row.className = "overview-summary-row";
        row.style.setProperty("--goal-accent", this.goalColorValue(goal.color));
        const copy = document.createElement("div");
        copy.className = "overview-summary-copy";
        const title = document.createElement("strong");
        title.textContent = goal.title;
        const bar = document.createElement("div");
        bar.className = "mini-progress";
        const fill = document.createElement("span");
        const progress = PlannerDataService.goalProgress(goal);
        fill.style.width = `${progress}%`;
        bar.append(fill);
        copy.append(title, bar);
        const value = document.createElement("span");
        value.textContent = `${progress}%`;
        row.append(copy, value);
        this.elements.overviewGoalList.append(row);
      });

      this.elements.overviewHabitList.replaceChildren();
      this.elements.overviewHabitsEmpty.hidden = analytics.activeHabits.length > 0;
      analytics.activeHabits.forEach((slot) => {
        const row = document.createElement("div");
        row.className = "overview-summary-row";
        const name = document.createElement("strong");
        name.textContent = PlannerDataService.effectiveHabitName(slot, this.currentWeek.weekStart);
        const done = analytics.availableDays.filter((date) => this.currentWeek.habitMarks?.[slot.id]?.[date] === "done").length;
        const value = document.createElement("span");
        value.textContent = analytics.availableDays.length
          ? I18nService.t("week.habitSummary", { done, available: analytics.availableDays.length })
          : I18nService.t("week.noData");
        row.append(name, value);
        this.elements.overviewHabitList.append(row);
      });
    },

    goalColorValue(color) {
      return ({
        royalIndigo: "#2E4272",
        emeraldSilk: "#0B5345",
        matteBurgundy: "#6B1D2F",
        spicedSaffron: "#D4AC0D",
        terracottaSuede: "#BA5A31",
        midnightPurple: "#4A235A",
        bitterChocolate: "#4A3B32",
        nobleSage: "#7D9D86"
      })[color] || "#2E4272";
    },

    formatHours(value) {
      return Number.isInteger(value) ? String(value) : value.toFixed(1).replace(".", this.state.settings.language === "ru" ? "," : ".");
    },

    addGoalFromFirstEmpty(trigger) {
      const index = this.currentWeek.goals.findIndex((goal) => !goal);
      if (index === -1) {
        this.showToast("goal.limitTitle", "goal.limitCopy");
        return;
      }
      this.openGoalEditor(index, trigger);
    },

    addHabitFromFirstEmpty(trigger) {
      const index = this.habits.slots.findIndex((slot) => !PlannerDataService.effectiveHabitName(slot, this.currentWeek.weekStart).trim());
      if (index === -1) {
        this.showToast("habit.limitTitle", "habit.limitCopy");
        return;
      }
      this.openHabitEditor(index, trigger);
    },

    handleGoalBoardClick(event) {
      const button = event.target.closest("button[data-action]");
      if (!button) return;
      const card = button.closest("[data-goal-index]");
      const goalIndex = Number(card?.dataset.goalIndex);
      const subtaskItem = button.closest("[data-subtask-index]");
      const subtaskIndex = Number(subtaskItem?.dataset.subtaskIndex);
      const action = button.dataset.action;
      if (action === "add-goal") this.openGoalEditor(goalIndex, button);
      else if (action === "edit-goal") this.openGoalEditor(goalIndex, button);
      else if (action === "clear-goal") this.confirmClearGoal(goalIndex);
      else if (action === "goal-left") this.moveGoal(goalIndex, -1);
      else if (action === "goal-right") this.moveGoal(goalIndex, 1);
      else if (action === "add-subtask") this.openSubtaskEditor(goalIndex, -1, button);
      else if (action === "toggle-subtask") this.toggleSubtask(goalIndex, subtaskIndex);
      else if (action === "edit-subtask") this.openSubtaskEditor(goalIndex, subtaskIndex, button);
      else if (action === "delete-subtask") this.confirmDeleteSubtask(goalIndex, subtaskIndex);
      else if (action === "subtask-up") this.moveSubtask(goalIndex, subtaskIndex, subtaskIndex - 1);
      else if (action === "subtask-down") this.moveSubtask(goalIndex, subtaskIndex, subtaskIndex + 1);
    },

    handleHabitTableClick(event) {
      const button = event.target.closest("button[data-action]");
      if (!button) return;
      const row = button.closest("[data-habit-index]");
      const index = Number(row?.dataset.habitIndex);
      if (button.dataset.action === "edit-habit") this.openHabitEditor(index, button);
      else if (button.dataset.action === "cycle-habit") this.cycleHabit(index, button.dataset.date);
    },

    moveGoal(index, delta) {
      const target = index + delta;
      if (target < 0 || target > 3) return;
      [this.currentWeek.goals[index], this.currentWeek.goals[target]] = [this.currentWeek.goals[target], this.currentWeek.goals[index]];
      this.saveWeek();
      this.renderPlannerData();
    },

    moveSubtask(goalIndex, fromIndex, toIndex) {
      const goal = this.currentWeek.goals[goalIndex];
      if (!goal || toIndex < 0 || toIndex >= goal.subtasks.length || fromIndex === toIndex) return;
      const [item] = goal.subtasks.splice(fromIndex, 1);
      goal.subtasks.splice(toIndex, 0, item);
      goal.subtasks.forEach((subtask, index) => { subtask.position = index; });
      goal.updatedAt = new Date().toISOString();
      this.saveWeek();
      this.renderPlannerData();
    },

    toggleSubtask(goalIndex, subtaskIndex) {
      const subtask = this.currentWeek.goals[goalIndex]?.subtasks[subtaskIndex];
      if (!subtask) return;
      subtask.isCompleted = !subtask.isCompleted;
      this.currentWeek.goals[goalIndex].updatedAt = new Date().toISOString();
      this.saveWeek();
      this.renderPlannerData();
    },

    cycleHabit(index, date) {
      const slot = this.habits.slots[index];
      const name = PlannerDataService.effectiveHabitName(slot, this.currentWeek.weekStart).trim();
      if (!name || date > DateService.todayISO()) return;
      const states = ["unmarked", "done", "missed"];
      const current = this.currentWeek.habitMarks?.[slot.id]?.[date] || "unmarked";
      const next = states[(states.indexOf(current) + 1) % states.length];
      if (!this.currentWeek.habitMarks[slot.id]) this.currentWeek.habitMarks[slot.id] = {};
      if (next === "unmarked") delete this.currentWeek.habitMarks[slot.id][date];
      else this.currentWeek.habitMarks[slot.id][date] = next;
      this.saveWeek();
      this.renderPlannerData();
    },

    handlePlannerDragStart(event) {
      const subtask = event.target.closest(".subtask-item");
      if (subtask) {
        this.draggedSubtask = { goalIndex: Number(subtask.dataset.goalIndex), subtaskIndex: Number(subtask.dataset.subtaskIndex) };
        subtask.classList.add("is-dragging");
        event.dataTransfer.effectAllowed = "move";
        event.stopPropagation();
        return;
      }
      const card = event.target.closest("[data-goal-index]");
      if (!card) return;
      this.draggedGoalIndex = Number(card.dataset.goalIndex);
      card.classList.add("is-dragging");
      event.dataTransfer.effectAllowed = "move";
    },

    handlePlannerDragOver(event) {
      const target = this.draggedSubtask ? event.target.closest(".subtask-item") : event.target.closest("[data-goal-index]");
      if (!target) return;
      if (this.draggedSubtask && Number(target.dataset.goalIndex) !== this.draggedSubtask.goalIndex) return;
      event.preventDefault();
      this.elements.goalBoard.querySelectorAll(".is-drop-target").forEach((item) => item.classList.remove("is-drop-target"));
      target.classList.add("is-drop-target");
    },

    handlePlannerDrop(event) {
      event.preventDefault();
      if (this.draggedSubtask) {
        const target = event.target.closest(".subtask-item");
        if (target && Number(target.dataset.goalIndex) === this.draggedSubtask.goalIndex) {
          this.moveSubtask(this.draggedSubtask.goalIndex, this.draggedSubtask.subtaskIndex, Number(target.dataset.subtaskIndex));
        }
      } else if (this.draggedGoalIndex !== null) {
        const target = event.target.closest("[data-goal-index]");
        const targetIndex = Number(target?.dataset.goalIndex);
        if (Number.isInteger(targetIndex) && targetIndex !== this.draggedGoalIndex) {
          const [goal] = this.currentWeek.goals.splice(this.draggedGoalIndex, 1);
          this.currentWeek.goals.splice(targetIndex, 0, goal);
          this.saveWeek();
          this.renderPlannerData();
        }
      }
      this.clearPlannerDragState();
    },

    clearPlannerDragState() {
      this.elements.goalBoard.querySelectorAll(".is-dragging, .is-drop-target").forEach((item) => item.classList.remove("is-dragging", "is-drop-target"));
      this.draggedGoalIndex = null;
      this.draggedSubtask = null;
    },

    openGoalEditor(index, trigger) {
      const goal = this.currentWeek.goals[index];
      this.prepareEditor(goal ? "goal.editorEdit" : "goal.editorNew", trigger);
      const form = document.createElement("form");
      form.className = "editor-form";
      form.noValidate = true;
      form.innerHTML = `
        <label class="form-field"><span>${I18nService.t("goal.title")}</span><input name="title" maxlength="120" required><small>${I18nService.t("goal.titleHint")}</small><span class="form-error" data-error="title"></span></label>
        <label class="form-field"><span>${I18nService.t("goal.description")}</span><textarea name="description" maxlength="2000"></textarea><small>${I18nService.t("goal.descriptionHint")}</small><span class="form-error" data-error="description"></span></label>
        <fieldset class="color-palette"><legend>${I18nService.t("goal.color")}</legend></fieldset>
        <label class="form-field" data-manual-progress><span>${I18nService.t("week.manualProgress")}</span><input name="manualProgress" type="number" min="0" max="100" step="1"><small>${I18nService.t("goal.progressHint")}</small></label>`;
      form.elements.title.value = goal?.title || "";
      form.elements.description.value = goal?.description || "";
      form.elements.manualProgress.value = String(goal?.manualProgress || 0);
      form.querySelector("[data-manual-progress]").hidden = Boolean(goal?.subtasks.length);
      const palette = form.querySelector(".color-palette");
      PlannerDataService.palette.forEach((color) => {
        const label = document.createElement("label");
        label.className = "color-choice";
        label.title = I18nService.t(`color.${color}`);
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "color";
        input.value = color;
        input.checked = color === (goal?.color || "royalIndigo");
        input.setAttribute("aria-label", I18nService.t(`color.${color}`));
        const swatch = document.createElement("span");
        swatch.style.setProperty("--choice-color", this.goalColorValue(color));
        label.append(input, swatch);
        palette.append(label);
      });
      form.addEventListener("input", () => { this.panelDirty = true; });
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const title = form.elements.title.value.trim();
        const description = form.elements.description.value.trim();
        form.querySelectorAll(".form-error").forEach((item) => { item.textContent = ""; });
        if (!title) {
          form.querySelector('[data-error="title"]').textContent = I18nService.t("goal.errorTitle");
          form.elements.title.focus();
          return;
        }
        if (title.length > 120) {
          form.querySelector('[data-error="title"]').textContent = I18nService.t("goal.errorTitleLong");
          return;
        }
        if (description.length > 2000) {
          form.querySelector('[data-error="description"]').textContent = I18nService.t("goal.errorDescriptionLong");
          return;
        }
        const now = new Date().toISOString();
        this.currentWeek.goals[index] = {
          id: goal?.id || PlannerDataService.id(),
          title,
          description,
          color: form.elements.color.value,
          manualProgress: goal?.subtasks.length ? goal.manualProgress : PlannerDataService.clampProgress(form.elements.manualProgress.value),
          subtasks: goal?.subtasks || [],
          createdAt: goal?.createdAt || now,
          updatedAt: now
        };
        this.saveWeek();
        this.renderPlannerData();
        this.panelDirty = false;
        this.closeContextPanel(true);
      });
      this.elements.contextPanelBody.append(form);
      this.panelAction = () => form.requestSubmit();
      window.setTimeout(() => form.elements.title.focus(), 0);
    },

    openSubtaskEditor(goalIndex, subtaskIndex, trigger) {
      const goal = this.currentWeek.goals[goalIndex];
      if (!goal) return;
      const subtask = subtaskIndex >= 0 ? goal.subtasks[subtaskIndex] : null;
      this.prepareEditor(subtask ? "subtask.editorEdit" : "subtask.editorNew", trigger);
      const form = document.createElement("form");
      form.className = "editor-form";
      form.noValidate = true;
      form.innerHTML = `
        <label class="form-field"><span>${I18nService.t("subtask.text")}</span><textarea name="text" maxlength="300" required></textarea><span class="form-error" data-error="text"></span></label>
        <label class="form-field"><span>${I18nService.t("subtask.tags")}</span><input name="tags" maxlength="500"><small>${I18nService.t("subtask.tagsHint")}</small></label>`;
      form.elements.text.value = subtask?.text || "";
      form.elements.tags.value = subtask?.hashtags.map((tag) => `#${tag.replace(/^#/, "")}`).join(" ") || "";
      form.addEventListener("input", () => { this.panelDirty = true; });
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const text = form.elements.text.value.trim();
        const error = form.querySelector('[data-error="text"]');
        error.textContent = "";
        if (!text) {
          error.textContent = I18nService.t("subtask.errorText");
          form.elements.text.focus();
          return;
        }
        if (text.length > 300) {
          error.textContent = I18nService.t("subtask.errorLong");
          return;
        }
        const value = {
          id: subtask?.id || PlannerDataService.id(),
          text,
          isCompleted: Boolean(subtask?.isCompleted),
          hashtags: PlannerDataService.normalizeHashtags(form.elements.tags.value),
          position: subtask ? subtaskIndex : goal.subtasks.length
        };
        if (subtask) goal.subtasks[subtaskIndex] = value;
        else goal.subtasks.push(value);
        goal.subtasks.forEach((item, index) => { item.position = index; });
        goal.updatedAt = new Date().toISOString();
        this.saveWeek();
        this.renderPlannerData();
        this.panelDirty = false;
        this.closeContextPanel(true);
      });
      this.elements.contextPanelBody.append(form);
      this.panelAction = () => form.requestSubmit();
      window.setTimeout(() => form.elements.text.focus(), 0);
    },

    openHabitEditor(index, trigger) {
      const slot = this.habits.slots[index];
      const currentName = PlannerDataService.effectiveHabitName(slot, this.currentWeek.weekStart);
      this.prepareEditor(currentName ? "habit.editorEdit" : "habit.editorNew", trigger);
      const form = document.createElement("form");
      form.className = "editor-form";
      form.noValidate = true;
      form.innerHTML = `
        <label class="form-field"><span>${I18nService.t("habit.name")}</span><input name="name" maxlength="120" required><span class="form-error" data-error="name"></span></label>
        <p class="editor-note">${I18nService.t("habit.versionNote")}</p>`;
      form.elements.name.value = currentName;
      if (currentName) {
        const clear = document.createElement("button");
        clear.type = "button";
        clear.className = "editor-danger";
        clear.textContent = I18nService.t("habit.clear");
        clear.addEventListener("click", () => this.openConfirmation(() => {
          PlannerDataService.setHabitVersion(slot, this.currentWeek.weekStart, "");
          this.saveHabits();
          this.renderPlannerData();
          this.panelDirty = false;
          this.closeContextPanel(true);
        }, { titleKey: "habit.clearTitle", copyKey: "habit.clearCopy" }));
        form.append(clear);
      }
      form.addEventListener("input", () => { this.panelDirty = true; });
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = form.elements.name.value.trim();
        const error = form.querySelector('[data-error="name"]');
        error.textContent = "";
        if (!name) {
          error.textContent = I18nService.t("habit.errorName");
          form.elements.name.focus();
          return;
        }
        if (name.length > 120) {
          error.textContent = I18nService.t("habit.errorLong");
          return;
        }
        PlannerDataService.setHabitVersion(slot, this.currentWeek.weekStart, name);
        this.saveHabits();
        this.renderPlannerData();
        this.panelDirty = false;
        this.closeContextPanel(true);
      });
      this.elements.contextPanelBody.append(form);
      this.panelAction = () => form.requestSubmit();
      window.setTimeout(() => form.elements.name.focus(), 0);
    },

    prepareEditor(titleKey, trigger) {
      this.lastFocusedElement = trigger || document.activeElement;
      this.panelDirty = false;
      this.elements.contextPanelTitle.textContent = I18nService.t(titleKey);
      this.elements.contextPanelBody.replaceChildren();
      this.elements.contextPanelDone.querySelector("span").textContent = I18nService.t("actions.save");
      this.elements.panelScrim.hidden = false;
      this.elements.contextPanel.classList.add("is-open");
      this.elements.contextPanel.setAttribute("aria-hidden", "false");
      document.querySelector(".sidebar").inert = true;
      document.querySelector(".workspace").inert = true;
    },

    confirmClearGoal(index) {
      const goal = this.currentWeek.goals[index];
      if (!goal) return;
      this.openConfirmation(() => {
        const snapshot = structuredClone(this.currentWeek);
        this.currentWeek.goals[index] = null;
        Object.values(this.currentWeek.days || {}).forEach((day) => {
          ["mainTasks", "otherTasks"].forEach((listName) => {
            if (Array.isArray(day?.[listName])) day[listName].forEach((task) => { if (task.goalId === goal.id) task.goalId = null; });
          });
        });
        this.currentWeek.records.forEach((record) => { if (record.goalId === goal.id) record.goalId = null; });
        this.saveWeek(true);
        this.renderPlannerData();
        this.showUndoToast("goal.clearedTitle", "goal.clearedCopy", () => {
          if (this.currentWeek.weekStart !== snapshot.weekStart) return;
          this.currentWeek = snapshot;
          this.saveWeek(true);
          this.renderPlannerData();
          this.showToast("goal.restoredTitle", "goal.restoredCopy");
        });
      }, { titleKey: "goal.clearTitle", copyKey: "goal.clearCopy" });
    },

    confirmDeleteSubtask(goalIndex, subtaskIndex) {
      const goal = this.currentWeek.goals[goalIndex];
      if (!goal?.subtasks[subtaskIndex]) return;
      this.openConfirmation(() => {
        const snapshot = structuredClone(this.currentWeek);
        const previousProgress = PlannerDataService.goalProgress(goal);
        goal.subtasks.splice(subtaskIndex, 1);
        goal.subtasks.forEach((item, index) => { item.position = index; });
        if (!goal.subtasks.length) goal.manualProgress = previousProgress;
        goal.updatedAt = new Date().toISOString();
        this.saveWeek(true);
        this.renderPlannerData();
        this.showUndoToast("subtask.deletedTitle", "subtask.deletedCopy", () => {
          if (this.currentWeek.weekStart !== snapshot.weekStart) return;
          this.currentWeek = snapshot;
          this.saveWeek(true);
          this.renderPlannerData();
        });
      }, { titleKey: "subtask.deleteTitle", copyKey: "subtask.deleteCopy" });
    },

    getDay(date = this.state.ui.selectedDate) {
      if (!this.currentWeek.days[date]) this.currentWeek.days[date] = { mainTasks: [], otherTasks: [] };
      return this.currentWeek.days[date];
    },

    saveIdealWeek(immediate = false) {
      this.saveWeek(immediate);
    },

    saveNotes(immediate = false) {
      if (immediate) StorageService.writeNow(StorageService.keys.notes, this.notes);
      else StorageService.schedule(StorageService.keys.notes, this.notes);
    },

    saveSeries(immediate = false) {
      if (immediate) StorageService.writeNow(StorageService.keys.series, this.seriesCollection);
      else StorageService.schedule(StorageService.keys.series, this.seriesCollection);
    },

    recordsForDate(date) {
      const weekStart = DateService.toISO(DateService.startOfWeek(DateService.fromISO(date)));
      const week = weekStart === this.currentWeek.weekStart ? this.currentWeek : PlannerDataService.normalizeWeek(StorageService.read(StorageService.weekKey(weekStart), null), weekStart);
      return [...week.records.filter((record) => record.date === date), ...RecurrenceService.forDate(this.seriesCollection, date)];
    },

    writeWeekDirect(week) {
      week.updatedAt = new Date().toISOString();
      StorageService.writeNow(StorageService.weekKey(week.weekStart), week);
      const index = StorageService.read(StorageService.keys.weekIndex, []);
      const safe = Array.isArray(index) ? index.filter((item) => typeof item?.weekStart === "string") : [];
      const existing = safe.find((item) => item.weekStart === week.weekStart);
      if (existing) existing.updatedAt = week.updatedAt; else safe.push({ weekStart: week.weekStart, updatedAt: week.updatedAt });
      StorageService.writeNow(StorageService.keys.weekIndex, safe.sort((a, b) => a.weekStart.localeCompare(b.weekStart)));
    },

    renderDay() {
      const day = this.getDay();
      this.elements.mainTaskCapacity.textContent = `${day.mainTasks.length} / 3`;
      this.elements.otherTaskCapacity.textContent = `${day.otherTasks.length} / 10`;
      this.renderTaskList(this.elements.mainTaskList, day.mainTasks, "main", 3);
      this.renderTaskList(this.elements.otherTaskList, day.otherTasks, "other", 10);
      this.elements.scheduleScale.value = this.state.settings.scheduleScale;
      this.elements.daySchedule.dataset.scale = this.state.settings.scheduleScale;
      this.renderScheduleGrid();
    },

    renderTaskList(container, tasks, list, limit) {
      container.replaceChildren();
      tasks.forEach((task, index) => {
        const row = document.createElement("article");
        row.className = `day-task${task.isCompleted ? " is-completed" : ""}`;
        row.dataset.taskId = task.id; row.dataset.list = list; row.dataset.index = String(index); row.draggable = true;
        const check = document.createElement("button"); check.type = "button"; check.className = "task-check"; check.dataset.action = "toggle-task";
        check.setAttribute("aria-label", I18nService.t("task.complete")); check.textContent = task.isCompleted ? "✓" : "";
        const copy = document.createElement("button"); copy.type = "button"; copy.className = "task-copy"; copy.dataset.action = "edit-task";
        const title = document.createElement("strong"); title.textContent = task.title;
        const meta = document.createElement("span"); meta.textContent = task.scheduleRecordId ? "◷" : "⋮⋮";
        copy.append(title, meta);
        const actions = document.createElement("div"); actions.className = "task-row-actions";
        actions.append(
          this.createIconButton("task-up", "actions.moveUp", "m7 14 5-5 5 5", index === 0),
          this.createIconButton("task-down", "actions.moveDown", "m7 10 5 5 5-5", index === tasks.length - 1),
          this.createIconButton("move-task-list", list === "main" ? "actions.moveOther" : "actions.moveMain", "M7 7h10m0 0-3-3m3 3-3 3M17 17H7m0 0 3-3m-3 3 3 3"),
          this.createIconButton("schedule-task", "task.schedule", "M5 3v3m14-3v3M4 9h16M5 5h14v15H5z"),
          this.createIconButton("delete-task", "actions.delete", "M4 7h16M9 7V4h6v3m-8 0 1 13h8l1-13")
        );
        row.append(check, copy, actions); container.append(row);
      });
      for (let index = tasks.length; index < limit; index += 1) {
        const empty = document.createElement("button"); empty.type = "button"; empty.className = "task-empty-row"; empty.dataset.addList = list;
        empty.textContent = index === tasks.length ? I18nService.t(list === "main" ? "task.emptyMain" : "task.emptyOther") : "";
        container.append(empty);
      }
    },

    findTask(id) {
      for (const [date, day] of Object.entries(this.currentWeek.days)) {
        for (const list of ["main", "other"]) {
          const key = `${list}Tasks`; const index = day[key].findIndex((task) => task.id === id);
          if (index >= 0) return { task: day[key][index], date, list, key, index, day };
        }
      }
      return null;
    },

    handleTaskClick(event) {
      const empty = event.target.closest("[data-add-list]");
      if (empty) { this.openTaskEditor(null, empty.dataset.addList, empty); return; }
      const button = event.target.closest("button[data-action]"); if (!button) return;
      const row = button.closest("[data-task-id]"); const found = this.findTask(row?.dataset.taskId); if (!found) return;
      const { task, list, index } = found; const action = button.dataset.action;
      if (action === "edit-task") this.openTaskEditor(task, list, button);
      else if (action === "toggle-task") { task.isCompleted = !task.isCompleted; task.updatedAt = new Date().toISOString(); this.syncTaskRecord(task); this.saveWeek(); this.renderPlannerData(); }
      else if (action === "task-up") this.reorderTask(found, index - 1);
      else if (action === "task-down") this.reorderTask(found, index + 1);
      else if (action === "move-task-list") this.moveTaskList(found, list === "main" ? "other" : "main");
      else if (action === "schedule-task") {
        const existing = this.currentWeek.records.find((record) => record.id === task.scheduleRecordId || record.taskId === task.id);
        this.openRecordEditor(existing || null, existing ? null : { task, date: found.date, column: "flexible", startTime: "09:00" }, button);
      }
      else if (action === "delete-task") this.confirmDeleteTask(found);
    },

    reorderTask(found, targetIndex) {
      const list = found.day[found.key]; if (targetIndex < 0 || targetIndex >= list.length) return;
      const [task] = list.splice(found.index, 1); list.splice(targetIndex, 0, task); list.forEach((item, index) => { item.position = index; });
      this.saveWeek(); this.renderPlannerData();
    },

    moveTaskList(found, targetList, targetIndex = null) {
      const targetKey = `${targetList}Tasks`; const limit = targetList === "main" ? 3 : 10; const target = found.day[targetKey];
      if (target.length >= limit) { this.showToast("task.limitTitle", targetList === "main" ? "task.limitMain" : "task.limitOther"); return false; }
      found.day[found.key].splice(found.index, 1); const position = targetIndex === null ? target.length : Math.max(0, Math.min(target.length, targetIndex));
      found.task.list = targetList; target.splice(position, 0, found.task);
      [found.day.mainTasks, found.day.otherTasks].forEach((items) => items.forEach((item, index) => { item.position = index; }));
      this.saveWeek(); this.renderPlannerData(); return true;
    },

    syncTaskRecord(task) {
      const record = this.currentWeek.records.find((item) => item.id === task.scheduleRecordId || item.taskId === task.id);
      if (record) { Object.assign(record, { title: task.title, description: task.text, hashtags: [...(task.hashtags || [])], fileNames: [...(task.fileNames || [])], goalId: null, habitId: null, updatedAt: new Date().toISOString() }); }
    },

    knownHashtags() {
      const values = new Set();
      SearchService.collect(this.habits, this.seriesCollection, this.notes).forEach((item) => (item.hashtags || []).forEach((tag) => values.add(tag.replace(/^#/, "").toLocaleLowerCase())));
      return [...values].sort((a, b) => a.localeCompare(b));
    },

    relationFieldsMarkup() {
      return `<label class="form-field"><span>${I18nService.t("record.tags")}</span><input name="hashtags" list="knownHashtags" autocomplete="off"><small>${I18nService.t("record.tagsHint")}</small></label><datalist id="knownHashtags">${this.knownHashtags().map((tag) => `<option value="#${tag}"></option>`).join("")}</datalist><fieldset class="form-field linked-files"><legend>${I18nService.t("record.files")}</legend><label class="file-picker secondary-button"><span>${I18nService.t("record.chooseFiles")}</span><input name="files" type="file" multiple></label><div class="linked-file-list" data-file-list></div><small>${I18nService.t("record.filesHint")}</small><span class="form-error" data-error="files"></span></fieldset>`;
    },

    setupUniversalFields(form, entity = {}) {
      form.elements.hashtags.value = (entity.hashtags || []).map((tag) => `#${tag.replace(/^#/, "")}`).join(" ");
      form.dataset.fileNames = JSON.stringify((entity.fileNames || []).slice(0, 10));
      const renderFiles = () => {
        const names = JSON.parse(form.dataset.fileNames || "[]"); const list = form.querySelector("[data-file-list]"); list.replaceChildren();
        names.forEach((name) => { const row = document.createElement("span"); row.className = "linked-file-chip"; const text = document.createElement("span"); text.textContent = name; const remove = document.createElement("button"); remove.type = "button"; remove.dataset.removeFile = name; remove.setAttribute("aria-label", `${I18nService.t("actions.remove")}: ${name}`); remove.textContent = "×"; row.append(text, remove); list.append(row); });
      };
      form.elements.files.addEventListener("change", () => {
        const current = JSON.parse(form.dataset.fileNames || "[]"); const incoming = [...form.elements.files.files].map((file) => file.name); const merged = PlannerDataService.mergeFileNames(current, incoming);
        form.querySelector('[data-error="files"]').textContent = merged.overflow ? I18nService.t("record.fileLimit") : "";
        form.dataset.fileNames = JSON.stringify(merged.names); form.elements.files.value = ""; this.panelDirty = true; renderFiles();
      });
      form.addEventListener("click", (event) => { const button = event.target.closest("[data-remove-file]"); if (!button) return; form.dataset.fileNames = JSON.stringify(JSON.parse(form.dataset.fileNames || "[]").filter((name) => name !== button.dataset.removeFile)); this.panelDirty = true; renderFiles(); });
      renderFiles();
    },

    readUniversalFields(form) {
      return { hashtags: PlannerDataService.normalizeHashtags(form.elements.hashtags.value), goalId: null, habitId: null, fileNames: JSON.parse(form.dataset.fileNames || "[]") };
    },

    openTaskEditor(task, list, trigger) {
      const day = this.getDay(); const target = day[`${list}Tasks`]; const limit = list === "main" ? 3 : 10;
      if (!task && target.length >= limit) { this.showToast("task.limitTitle", list === "main" ? "task.limitMain" : "task.limitOther"); return; }
      this.prepareEditor(task ? "task.edit" : "task.new", trigger);
      const form = document.createElement("form"); form.className = "editor-form"; form.noValidate = true;
      form.innerHTML = `<label class="form-field"><span>${I18nService.t("task.title")}</span><input name="title" maxlength="300" required><span class="form-error" data-error></span></label><label class="form-field"><span>${I18nService.t("task.text")}</span><textarea name="text" maxlength="10000"></textarea></label><label class="form-field"><span>${I18nService.t("task.list")}</span><select name="list"><option value="main">${I18nService.t("task.main")}</option><option value="other">${I18nService.t("task.other")}</option></select></label><label class="check-field"><input name="completed" type="checkbox"><span>${I18nService.t("task.complete")}</span></label>${this.relationFieldsMarkup()}`;
      form.elements.title.value = task?.title || ""; form.elements.text.value = task?.text || ""; form.elements.list.value = list; form.elements.completed.checked = Boolean(task?.isCompleted);
      this.setupUniversalFields(form, task);
      form.addEventListener("input", () => { this.panelDirty = true; });
      form.addEventListener("submit", (event) => {
        event.preventDefault(); const title = form.elements.title.value.trim(); const nextList = form.elements.list.value; const error = form.querySelector("[data-error]"); error.textContent = "";
        if (!title) { error.textContent = I18nService.t("task.errorTitle"); return; }
        if (title.length > 300) { error.textContent = I18nService.t("task.errorLong"); return; }
        if (task) {
          const found = this.findTask(task.id); if (!found) return;
          if (nextList !== found.list && found.day[`${nextList}Tasks`].length >= (nextList === "main" ? 3 : 10)) { error.textContent = I18nService.t(nextList === "main" ? "task.limitMain" : "task.limitOther"); return; }
          Object.assign(task, { title, text: form.elements.text.value.slice(0, 10000), isCompleted: form.elements.completed.checked, ...this.readUniversalFields(form), updatedAt: new Date().toISOString() });
          if (nextList !== found.list) { found.day[found.key].splice(found.index, 1); task.list = nextList; found.day[`${nextList}Tasks`].push(task); }
          this.syncTaskRecord(task);
        } else {
          const nextTarget = day[`${nextList}Tasks`]; const nextLimit = nextList === "main" ? 3 : 10;
          if (nextTarget.length >= nextLimit) { error.textContent = I18nService.t(nextList === "main" ? "task.limitMain" : "task.limitOther"); return; }
          nextTarget.push({ id: PlannerDataService.id(), title, text: form.elements.text.value.slice(0, 10000), date: this.state.ui.selectedDate, list: nextList, position: nextTarget.length, isCompleted: form.elements.completed.checked, ...this.readUniversalFields(form), scheduleRecordId: null, reminders: null, recurrence: null, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
        }
        [day.mainTasks, day.otherTasks].forEach((items) => items.forEach((item, index) => { item.position = index; }));
        this.saveWeek(); this.renderPlannerData(); this.panelDirty = false; this.closeContextPanel(true);
      });
      this.elements.contextPanelBody.append(form); this.panelAction = () => form.requestSubmit(); window.setTimeout(() => form.elements.title.focus(), 0);
    },

    confirmDeleteTask(found) {
      this.openConfirmation(() => {
        const snapshot = structuredClone(this.currentWeek); found.day[found.key].splice(found.index, 1);
        this.currentWeek.records = this.currentWeek.records.filter((record) => record.taskId !== found.task.id); this.saveWeek(true); this.renderPlannerData();
        this.showUndoToast("task.deletedTitle", "task.deletedCopy", () => { if (this.currentWeek.weekStart !== snapshot.weekStart) return; this.currentWeek = snapshot; this.saveWeek(true); this.renderPlannerData(); });
      }, { titleKey: "task.deleteTitle", copyKey: "task.deleteCopy" });
    },

    handleTaskDragStart(event) {
      const row = event.target.closest("[data-task-id]"); if (!row) return; this.draggedTask = { id: row.dataset.taskId };
      event.dataTransfer.effectAllowed = "move"; event.dataTransfer.setData("text/plain", `task:${row.dataset.taskId}`);
    },

    handleTaskDragOver(event) { if (event.target.closest(".task-list")) event.preventDefault(); },

    handleTaskDrop(event) {
      event.preventDefault(); const container = event.target.closest(".task-list"); if (!container || !this.draggedTask) return;
      const found = this.findTask(this.draggedTask.id); if (!found) return; const targetList = container.dataset.list;
      const targetRow = event.target.closest("[data-task-id]"); const targetIndex = targetRow ? Number(targetRow.dataset.index) : this.getDay()[`${targetList}Tasks`].length;
      if (found.list === targetList) { const list = found.day[found.key]; const [task] = list.splice(found.index, 1); list.splice(Math.min(targetIndex, list.length), 0, task); list.forEach((item, index) => { item.position = index; }); this.saveWeek(); this.renderPlannerData(); }
      else this.moveTaskList(found, targetList, targetIndex);
      this.draggedTask = null;
    },

    scheduleRowHeight() { return ({ compact: 24, standard: 32, large: 42 })[this.state.settings.scheduleScale] || 32; },

    buildScheduleTracks(container, columns, slotCallback) {
      container.replaceChildren(); container.style.setProperty("--slot-height", `${this.scheduleRowHeight()}px`);
      const rail = document.createElement("div"); rail.className = "schedule-time-rail";
      for (let minute = 360; minute < 1440; minute += 30) { const label = document.createElement("span"); label.textContent = minute % 60 === 0 ? PlannerDataService.minutesToTime(minute) : ""; rail.append(label); }
      const end = document.createElement("span"); end.className = "time-end"; end.textContent = "24:00"; rail.append(end); container.append(rail);
      columns.forEach((column) => {
        const track = document.createElement("div"); track.className = "schedule-track"; track.dataset.track = String(column);
        for (let minute = 360; minute < 1440; minute += 30) { const slot = document.createElement("button"); slot.type = "button"; slot.className = `schedule-slot ${minute % 60 === 0 ? "is-hour" : "is-half"}`; slot.dataset.slotTime = PlannerDataService.minutesToTime(minute); slotCallback(slot, column); track.append(slot); }
        const layer = document.createElement("div"); layer.className = "schedule-record-layer"; track.append(layer); container.append(track);
      });
    },

    renderScheduleGrid() {
      this.buildScheduleTracks(this.elements.daySchedule, ["fixed", "flexible"], (slot, column) => { slot.dataset.column = column; slot.setAttribute("aria-label", `${PlannerDataService.minutesToTime(PlannerDataService.timeToMinutes(slot.dataset.slotTime))}, ${I18nService.t(column === "fixed" ? "day.fixed" : "day.flexible")}`); });
      ["fixed", "flexible"].forEach((column) => {
        const records = this.recordsForDate(this.state.ui.selectedDate).filter((record) => record.column === column); const layout = PlannerDataService.overlapLayout(records);
        const layer = this.elements.daySchedule.querySelector(`[data-track="${column}"] .schedule-record-layer`);
        records.forEach((record) => layer.append(this.createScheduleBlock(record, layout.get(record.id), "record")));
      });
      this.autoScrollSchedule(this.elements.dayScheduleScroll);
    },

    createScheduleBlock(item, layout, kind) {
      const block = document.createElement("article"); block.className = `schedule-block ${kind === "ideal" ? (item.category === "hard" ? "is-fixed" : "is-flexible") : (item.column === "fixed" ? "is-fixed" : "is-flexible")}${layout?.conflict ? " has-conflict" : ""}`;
      if (kind === "record" && item.taskId && this.findTask(item.taskId)?.task.isCompleted) block.classList.add("is-completed");
      block.dataset[kind === "ideal" ? "idealId" : "recordId"] = item.id; block.draggable = true; block.style.setProperty("--record-color", this.goalColorValue(item.color));
      const start = PlannerDataService.timeToMinutes(item.startTime); const end = PlannerDataService.timeToMinutes(item.endTime); const height = this.scheduleRowHeight();
      block.style.top = `${(start - 360) / 30 * height + 1}px`; block.style.height = `${Math.max(22, (end - start) / 30 * height - 2)}px`;
      const lanes = layout?.lanes || 1; const lane = layout?.lane || 0; block.style.left = `calc(${lane / lanes * 100}% + 3px)`; block.style.width = `calc(${100 / lanes}% - 6px)`;
      const title = document.createElement("strong"); title.textContent = item.title; const time = document.createElement("span"); time.textContent = `${item.startTime}–${item.endTime}`;
      block.append(title, time); if (layout?.conflict) { const warning = document.createElement("b"); warning.textContent = "!"; warning.title = I18nService.t("schedule.conflict"); block.append(warning); }
      const handle = document.createElement("span"); handle.className = "resize-handle"; handle.dataset.resize = kind; handle.setAttribute("aria-label", I18nService.t("schedule.end")); block.append(handle); return block;
    },

    handleScheduleClick(event) {
      if (event.target.closest(".resize-handle")) return; const block = event.target.closest("[data-record-id]");
      if (block) { const record = this.recordsForDate(this.state.ui.selectedDate).find((item) => item.id === block.dataset.recordId); if (record) this.openRecordEditor(record, null, block); return; }
      const slot = event.target.closest("[data-slot-time]"); if (slot) this.openRecordEditor(null, { date: this.state.ui.selectedDate, column: slot.dataset.column, startTime: slot.dataset.slotTime }, slot);
    },

    timeOptions(startOnly = false) {
      let html = ""; for (let minute = startOnly ? 360 : 390; minute <= (startOnly ? 1410 : 1440); minute += 30) { const value = PlannerDataService.minutesToTime(minute); html += `<option value="${value}">${value}</option>`; } return html;
    },

    recordConflicts(record, ignoreId = null) {
      const start = PlannerDataService.timeToMinutes(record.startTime); const end = PlannerDataService.timeToMinutes(record.endTime);
      return this.recordsForDate(record.date).some((item) => item.id !== ignoreId && item.column === record.column && start < PlannerDataService.timeToMinutes(item.endTime) && end > PlannerDataService.timeToMinutes(item.startTime));
    },

    openNoteEditor(record, trigger) { this.openRecordEditor(record, { type: "note", date: record?.date || this.state.ui.selectedDate }, trigger); },

    openRecordEditor(record, defaults = null, trigger) {
      const series = record?.seriesId ? this.seriesCollection.items.find((item) => item.id === record.seriesId) : null;
      const task = defaults?.task || (record?.taskId ? this.findTask(record.taskId)?.task : null); const isNote = (defaults?.type || record?.type) === "note";
      const startTime = defaults?.startTime || record?.startTime || "09:00";
      const value = record || { title: task?.title || "", description: task?.text || "", date: defaults?.date || this.state.ui.selectedDate, type: isNote ? "note" : (defaults?.column || "flexible"), startTime: isNote ? null : startTime, endTime: isNote ? null : PlannerDataService.minutesToTime(PlannerDataService.timeToMinutes(startTime) + 30), column: isNote ? null : (defaults?.column || "flexible"), color: "royalIndigo", taskId: task?.id || null, hashtags: [...(task?.hashtags || [])], fileNames: [...(task?.fileNames || [])], goalId: null, habitId: null, reminders: { before15: false, atStart: false } };
      this.prepareEditor(isNote ? (record ? "record.editNote" : "record.newNote") : (record ? "schedule.edit" : "schedule.new"), trigger);
      const form = document.createElement("form"); form.className = "editor-form"; form.noValidate = true;
      const timeFields = isNote ? `<p class="editor-note">${I18nService.t("record.noTimeNote")}</p>` : `<div class="form-two-columns"><label class="form-field"><span>${I18nService.t("schedule.start")}</span><select name="startTime">${this.timeOptions(true)}</select></label><label class="form-field"><span>${I18nService.t("schedule.end")}</span><select name="endTime">${this.timeOptions(false)}</select></label></div><label class="form-field"><span>${I18nService.t("schedule.column")}</span><select name="column"><option value="fixed">${I18nService.t("schedule.fixed")}</option><option value="flexible">${I18nService.t("schedule.flexible")}</option></select></label>${this.colorPaletteMarkup(value.color)}<fieldset class="form-field reminder-options"><legend>${I18nService.t("record.reminders")}</legend><label class="check-field"><input name="reminder15" type="checkbox"><span>${I18nService.t("record.reminder15")}</span></label><label class="check-field"><input name="reminderNow" type="checkbox"><span>${I18nService.t("record.reminderNow")}</span></label></fieldset><span class="form-error" data-error="range"></span><p class="editor-note conflict-note" data-conflict hidden>${I18nService.t("schedule.conflict")}</p>`;
      form.innerHTML = `<label class="form-field"><span>${I18nService.t("schedule.title")}</span><input name="title" maxlength="300" required><span class="form-error" data-error="title"></span></label><label class="form-field"><span>${I18nService.t("schedule.description")}</span><textarea name="description" maxlength="10000"></textarea></label><label class="form-field"><span>${I18nService.t("schedule.date")}</span><input name="date" type="date" required></label>${timeFields}${this.relationFieldsMarkup()}<fieldset class="form-field recurrence-fields"><legend>${I18nService.t("recurrence.title")}</legend><select name="recurrence"><option value="none">${I18nService.t("recurrence.none")}</option><option value="daily">${I18nService.t("recurrence.daily")}</option><option value="weekly">${I18nService.t("recurrence.weekly")}</option></select><label class="form-field" data-until-field hidden><span>${I18nService.t("recurrence.until")}</span><input name="until" type="date"></label><span class="form-error" data-error="until"></span></fieldset><button type="button" class="telegram-share-button" data-telegram-share>${I18nService.t("actions.shareTelegram")}<small>${I18nService.t("telegram.later")}</small></button>`;
      ["title", "description", "date"].forEach((name) => { form.elements[name].value = value[name] || ""; });
      if (!isNote) { ["startTime", "endTime", "column"].forEach((name) => { form.elements[name].value = value[name] || ""; }); form.elements.reminder15.checked = Boolean(value.reminders?.before15); form.elements.reminderNow.checked = Boolean(value.reminders?.atStart); }
      form.elements.recurrence.value = series?.rule || "none"; form.elements.until.value = series?.until || ""; this.setupUniversalFields(form, value);
      const updateDynamic = () => {
        form.querySelector("[data-until-field]").hidden = form.elements.recurrence.value === "none";
        if (!isNote) { const draft = { date: form.elements.date.value, column: form.elements.column.value, startTime: form.elements.startTime.value, endTime: form.elements.endTime.value }; form.querySelector("[data-conflict]").hidden = !this.recordConflicts(draft, record?.id); }
      };
      form.addEventListener("input", () => { this.panelDirty = true; updateDynamic(); }); updateDynamic();
      form.querySelector("[data-telegram-share]").addEventListener("click", () => this.openTelegramPreview({ title: form.elements.title.value.trim(), description: form.elements.description.value, date: form.elements.date.value, startTime: isNote ? null : form.elements.startTime.value, endTime: isNote ? null : form.elements.endTime.value, hashtags: PlannerDataService.normalizeHashtags(form.elements.hashtags.value), fileNames: JSON.parse(form.dataset.fileNames || "[]"), color: form.elements.color?.value || "royalIndigo" }));
      form.addEventListener("submit", (event) => {
        event.preventDefault(); const title = form.elements.title.value.trim(); const date = form.elements.date.value; const recurrence = form.elements.recurrence.value; const until = form.elements.until.value || null;
        form.querySelector('[data-error="title"]').textContent = title ? "" : I18nService.t("task.errorTitle");
        const validRange = isNote || PlannerDataService.validateTimeRange(form.elements.startTime.value, form.elements.endTime.value).valid;
        if (!isNote) form.querySelector('[data-error="range"]').textContent = validRange ? "" : I18nService.t("schedule.errorRange");
        form.querySelector('[data-error="until"]').textContent = recurrence !== "none" && until && until < date ? I18nService.t("recurrence.errorUntil") : "";
        if (!title || !DateService.fromISO(date) || !validRange || (recurrence !== "none" && until && until < date)) return;
        const next = { ...value, id: record?.isRecurrenceInstance ? PlannerDataService.id() : (record?.id || PlannerDataService.id()), title, description: form.elements.description.value.slice(0, 10000), date, type: isNote ? "note" : form.elements.column.value, startTime: isNote ? null : form.elements.startTime.value, endTime: isNote ? null : form.elements.endTime.value, column: isNote ? null : form.elements.column.value, color: isNote ? "royalIndigo" : form.elements.color.value, taskId: task?.id || record?.taskId || null, ...this.readUniversalFields(form), reminders: isNote ? null : { before15: form.elements.reminder15.checked, atStart: form.elements.reminderNow.checked }, recurrence: recurrence === "none" ? null : recurrence, createdAt: record?.createdAt || new Date().toISOString(), updatedAt: new Date().toISOString() };
        const finish = () => { this.renderPlannerData(); this.renderSearchResults(); this.panelDirty = false; this.closeContextPanel(true); };
        if (series) { this.chooseSeriesScope(record.recurrenceDate, (scope) => { this.applySeriesEdit(series, record.recurrenceDate, next, recurrence, until, scope); this.saveSeries(); finish(); }); return; }
        if (recurrence !== "none") { if (record) this.currentWeek.records = this.currentWeek.records.filter((item) => item.id !== record.id); if (task) task.scheduleRecordId = null; this.seriesCollection.items.push(this.recordToSeries({ ...next, taskId: null }, recurrence, until)); this.saveSeries(); this.saveWeek(); finish(); return; }
        if (this.saveRegularRecord(record, next, task)) finish();
      });
      if (record) {
        const actions = document.createElement("div"); actions.className = "editor-action-row";
        const duplicate = document.createElement("button"); duplicate.type = "button"; duplicate.className = "secondary-button"; duplicate.textContent = I18nService.t("actions.duplicate"); duplicate.addEventListener("click", () => this.duplicateRecord(record));
        const remove = document.createElement("button"); remove.type = "button"; remove.className = "editor-danger"; remove.textContent = I18nService.t(record.taskId ? "schedule.unschedule" : "actions.delete"); remove.addEventListener("click", () => this.confirmDeleteRecord(record)); actions.append(duplicate, remove); form.append(actions);
      }
      this.elements.contextPanelBody.append(form); this.panelAction = () => form.requestSubmit(); window.setTimeout(() => form.elements.title.focus(), 0);
    },

    recordToSeries(record, rule, until) {
      const { date, recurrence, seriesId, isRecurrenceInstance, recurrenceDate, id, ...fields } = record;
      return { ...fields, id: PlannerDataService.id(), startDate: date, rule, until, exceptions: {}, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    },

    saveRegularRecord(record, next, task) {
      const destinationWeekStart = DateService.toISO(DateService.startOfWeek(DateService.fromISO(next.date)));
      const destinationWeek = destinationWeekStart === this.currentWeek.weekStart ? this.currentWeek : PlannerDataService.normalizeWeek(StorageService.read(StorageService.weekKey(destinationWeekStart), null), destinationWeekStart);
      const taskLocation = task ? this.findTask(task.id) : null;
      if (taskLocation && next.date !== taskLocation.date) {
        if (!destinationWeek.days[next.date]) destinationWeek.days[next.date] = { mainTasks: [], otherTasks: [] };
        const target = destinationWeek.days[next.date][taskLocation.key]; const limit = taskLocation.list === "main" ? 3 : 10;
        if (!target.some((item) => item.id === task.id) && target.length >= limit) { this.showToast("task.limitTitle", taskLocation.list === "main" ? "task.limitMain" : "task.limitOther"); return false; }
        taskLocation.day[taskLocation.key].splice(taskLocation.index, 1); task.date = next.date; if (!target.some((item) => item.id === task.id)) target.push(task); target.forEach((item, index) => { item.position = index; });
      }
      if (record) this.currentWeek.records = this.currentWeek.records.filter((item) => item.id !== record.id);
      destinationWeek.records.push(next);
      if (task) { Object.assign(task, { scheduleRecordId: next.id, title: next.title, text: next.description, hashtags: [...next.hashtags], fileNames: [...next.fileNames], goalId: next.goalId, habitId: next.habitId, updatedAt: next.updatedAt }); }
      this.saveWeek(); if (destinationWeekStart !== this.currentWeek.weekStart) this.writeWeekDirect(destinationWeek); return true;
    },

    chooseSeriesScope(instanceDate, callback) {
      const onlyAll = instanceDate < DateService.todayISO(); const overlay = document.createElement("div"); overlay.className = "series-scope-overlay";
      const dialog = document.createElement("section"); dialog.className = "series-scope-dialog"; dialog.setAttribute("role", "dialog"); dialog.setAttribute("aria-modal", "true");
      const title = document.createElement("h3"); title.textContent = I18nService.t("recurrence.scopeTitle"); const copy = document.createElement("p"); copy.textContent = I18nService.t("recurrence.scopeCopy"); const actions = document.createElement("div"); actions.className = "scope-actions";
      const scopes = onlyAll ? ["all"] : ["this", "following", "all"]; scopes.forEach((scope) => { const button = document.createElement("button"); button.type = "button"; button.className = scope === "all" ? "primary-button" : "secondary-button"; button.textContent = I18nService.t(`recurrence.${scope}`); button.addEventListener("click", () => { overlay.remove(); callback(scope); }); actions.append(button); });
      dialog.append(title, copy, actions); overlay.append(dialog); document.body.append(overlay); actions.querySelector("button").focus();
    },

    applySeriesEdit(series, instanceDate, next, recurrence, until, scope) {
      const fields = { title: next.title, description: next.description, startTime: next.startTime, endTime: next.endTime, type: next.type, column: next.column, color: next.color, hashtags: next.hashtags, fileNames: next.fileNames, goalId: next.goalId, habitId: next.habitId, reminders: next.reminders, updatedAt: new Date().toISOString() };
      if (scope === "this") {
        series.exceptions[instanceDate] = { deleted: recurrence === "none" || next.date !== instanceDate, override: recurrence !== "none" && next.date === instanceDate ? fields : null };
        if (next.date !== instanceDate || recurrence === "none") this.saveRegularRecord(null, { ...next, recurrence: null, seriesId: null, isRecurrenceInstance: false }, null);
      } else if (scope === "following") {
        series.until = RecurrenceService.previousDate(series, instanceDate);
        if (recurrence !== "none") this.seriesCollection.items.push({ ...fields, id: PlannerDataService.id(), startDate: next.date, rule: recurrence, until, exceptions: {}, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
        else this.saveRegularRecord(null, { ...next, recurrence: null, seriesId: null, isRecurrenceInstance: false }, null);
      } else if (recurrence === "none") this.seriesCollection.items = this.seriesCollection.items.filter((item) => item.id !== series.id);
      else { if (next.date !== instanceDate) series.startDate = DateService.toISO(DateService.addDays(DateService.fromISO(series.startDate), Math.round((DateService.fromISO(next.date) - DateService.fromISO(instanceDate)) / 86400000))); Object.assign(series, fields, { rule: recurrence, until, updatedAt: new Date().toISOString() }); }
    },

    colorPaletteMarkup(selected) {
      return `<fieldset class="color-palette form-field"><legend>${I18nService.t("schedule.color")}</legend>${PlannerDataService.palette.map((color) => `<label class="color-choice" title="${I18nService.t(`color.${color}`)}"><input type="radio" name="color" value="${color}" ${color === selected ? "checked" : ""}><span style="--choice-color:${this.goalColorValue(color)}"></span></label>`).join("")}</fieldset>`;
    },

    duplicateRecord(record) {
      const copy = { ...structuredClone(record), id: PlannerDataService.id(), taskId: null, recurrence: null, seriesId: null, isRecurrenceInstance: false, recurrenceDate: null, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
      this.saveRegularRecord(null, copy, null); this.renderPlannerData(); this.renderSearchResults(); this.panelDirty = false; this.closeContextPanel(true);
    },

    confirmDeleteRecord(record) {
      if (record.isRecurrenceInstance) {
        this.openConfirmation(() => this.chooseSeriesScope(record.recurrenceDate, (scope) => {
          const snapshot = structuredClone(this.seriesCollection); const series = this.seriesCollection.items.find((item) => item.id === record.seriesId); if (!series) return;
          if (scope === "this") series.exceptions[record.recurrenceDate] = { deleted: true };
          else if (scope === "following") series.until = RecurrenceService.previousDate(series, record.recurrenceDate);
          else this.seriesCollection.items = this.seriesCollection.items.filter((item) => item.id !== series.id);
          this.saveSeries(true); this.renderPlannerData(); this.renderSearchResults(); this.panelDirty = false; this.closeContextPanel(true);
          this.showUndoToast("schedule.deletedTitle", "schedule.deletedCopy", () => { this.seriesCollection = snapshot; this.saveSeries(true); this.renderPlannerData(); this.renderSearchResults(); });
        }), { titleKey: "recurrence.deleteTitle", copyKey: "recurrence.scopeCopy" }); return;
      }
      this.openConfirmation(() => { const snapshot = structuredClone(this.currentWeek); this.currentWeek.records = this.currentWeek.records.filter((item) => item.id !== record.id); const task = record.taskId ? this.findTask(record.taskId)?.task : null; if (task) task.scheduleRecordId = null; this.saveWeek(true); this.renderPlannerData(); this.renderSearchResults(); this.panelDirty = false; this.closeContextPanel(true); this.showUndoToast("schedule.deletedTitle", "schedule.deletedCopy", () => { if (this.currentWeek.weekStart !== snapshot.weekStart) return; this.currentWeek = snapshot; this.saveWeek(true); this.renderPlannerData(); this.renderSearchResults(); }); }, { titleKey: "schedule.deleteTitle", copyKey: "schedule.deleteCopy" });
    },

    handleScheduleDragStart(event) { const block = event.target.closest("[data-record-id]"); if (!block) return; this.draggedRecord = block.dataset.recordId; event.dataTransfer.setData("text/plain", `record:${this.draggedRecord}`); event.dataTransfer.effectAllowed = "move"; },

    handleScheduleDrop(event) {
      const slot = event.target.closest("[data-slot-time]"); if (!slot) return; event.preventDefault();
      if (this.draggedTask) { const found = this.findTask(this.draggedTask.id); if (found) { const existing = this.currentWeek.records.find((record) => record.taskId === found.task.id); if (existing) this.moveScheduleRecord(existing, this.state.ui.selectedDate, slot.dataset.column, slot.dataset.slotTime); else { const start = PlannerDataService.timeToMinutes(slot.dataset.slotTime); const record = { id: PlannerDataService.id(), title: found.task.title, description: found.task.text, date: this.state.ui.selectedDate, startTime: slot.dataset.slotTime, endTime: PlannerDataService.minutesToTime(start + 30), column: slot.dataset.column, color: "royalIndigo", taskId: found.task.id, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }; found.task.scheduleRecordId = record.id; this.currentWeek.records.push(record); this.saveWeek(); this.renderPlannerData(); } } this.draggedTask = null; }
      else if (this.draggedRecord) { const record = this.recordsForDate(this.state.ui.selectedDate).find((item) => item.id === this.draggedRecord); if (record) this.moveScheduleRecord(record, this.state.ui.selectedDate, slot.dataset.column, slot.dataset.slotTime); this.draggedRecord = null; }
    },

    moveScheduleRecord(record, date, column, startTime) {
      const duration = PlannerDataService.timeToMinutes(record.endTime) - PlannerDataService.timeToMinutes(record.startTime); const end = PlannerDataService.timeToMinutes(startTime) + duration;
      if (end > 1440) { this.showToast("task.limitTitle", "schedule.errorRange"); return false; }
      if (record.isRecurrenceInstance) {
        const series = this.seriesCollection.items.find((item) => item.id === record.seriesId); if (!series) return false;
        const next = { ...record, date, column, type: column, startTime, endTime: PlannerDataService.minutesToTime(end), updatedAt: new Date().toISOString() };
        this.chooseSeriesScope(record.recurrenceDate, (scope) => { this.applySeriesEdit(series, record.recurrenceDate, next, series.rule, series.until, scope); this.saveSeries(); this.renderPlannerData(); this.renderSearchResults(); }); return true;
      }
      if (record.taskId && date !== record.date) { const found = this.findTask(record.taskId); if (found) { const targetWeekStart = DateService.toISO(DateService.startOfWeek(DateService.fromISO(date))); if (targetWeekStart !== this.currentWeek.weekStart) { this.showToast("task.limitTitle", "task.limitOther"); return false; } const targetDay = this.getDay(date); const target = targetDay[found.key]; if (target.length >= (found.list === "main" ? 3 : 10)) { this.showToast("task.limitTitle", found.list === "main" ? "task.limitMain" : "task.limitOther"); return false; } found.day[found.key].splice(found.index, 1); found.task.date = date; target.push(found.task); } }
      record.date = date; record.column = column; record.startTime = startTime; record.endTime = PlannerDataService.minutesToTime(end); record.updatedAt = new Date().toISOString(); this.saveWeek(); this.renderPlannerData(); return true;
    },

    updateScheduleScale(scale) { if (!["compact", "standard", "large"].includes(scale)) return; this.state.settings.scheduleScale = scale; this.saveSettings(); this.renderDay(); this.renderIdealWeek(); },

    autoScrollSchedule(element) { if (!element) return; const now = new Date(); const minute = Math.max(360, Math.min(1410, now.getHours() * 60 + now.getMinutes())); const top = Math.max(0, (minute - 420) / 30 * this.scheduleRowHeight()); window.requestAnimationFrame(() => { element.scrollTop = top; }); },

    renderIdealWeek() {
      this.elements.idealSchedule.dataset.scale = this.state.settings.scheduleScale; this.buildScheduleTracks(this.elements.idealSchedule, [1, 2, 3, 4, 5, 6, 7], (slot, day) => { slot.dataset.day = String(day); });
      for (let day = 1; day <= 7; day += 1) { const items = this.currentWeek.idealItems.filter((item) => item.dayOfWeek === day); const layout = PlannerDataService.overlapLayout(items); const layer = this.elements.idealSchedule.querySelector(`[data-track="${day}"] .schedule-record-layer`); items.forEach((item) => layer.append(this.createScheduleBlock(item, layout.get(item.id), "ideal"))); }
      this.elements.idealEmpty.hidden = this.currentWeek.idealItems.length > 0; this.autoScrollSchedule(this.elements.idealScheduleScroll);
    },

    handleIdealClick(event) { if (event.target.closest(".resize-handle")) return; const block = event.target.closest("[data-ideal-id]"); if (block) { const item = this.currentWeek.idealItems.find((value) => value.id === block.dataset.idealId); if (item) this.openIdealEditor(item, null, block); return; } const slot = event.target.closest("[data-slot-time]"); if (slot) this.openIdealEditor(null, { dayOfWeek: Number(slot.dataset.day), startTime: slot.dataset.slotTime }, slot); },

    openIdealEditor(item, defaults, trigger) {
      const startTime = defaults?.startTime || item?.startTime || "09:00"; const value = item || { title: "", description: "", dayOfWeek: defaults?.dayOfWeek || 1, startTime, endTime: PlannerDataService.minutesToTime(PlannerDataService.timeToMinutes(startTime) + 30), color: "royalIndigo", category: "flexible" };
      this.prepareEditor(item ? "ideal.edit" : "ideal.new", trigger); const form = document.createElement("form"); form.className = "editor-form"; form.noValidate = true; const monday = new Date(2026, 0, 5); const locale = this.state.settings.language === "ru" ? "ru-RU" : "en-US";
      form.innerHTML = `<label class="form-field"><span>${I18nService.t("schedule.title")}</span><input name="title" maxlength="300" required><span class="form-error" data-error="title"></span></label><label class="form-field"><span>${I18nService.t("schedule.description")}</span><textarea name="description" maxlength="5000"></textarea></label><label class="form-field"><span>${I18nService.t("ideal.day")}</span><select name="dayOfWeek">${Array.from({ length: 7 }, (_, index) => `<option value="${index + 1}">${new Intl.DateTimeFormat(locale, { weekday: "long" }).format(DateService.addDays(monday, index))}</option>`).join("")}</select></label><div class="form-two-columns"><label class="form-field"><span>${I18nService.t("schedule.start")}</span><select name="startTime">${this.timeOptions(true)}</select></label><label class="form-field"><span>${I18nService.t("schedule.end")}</span><select name="endTime">${this.timeOptions(false)}</select></label></div><label class="form-field"><span>${I18nService.t("ideal.category")}</span><select name="category"><option value="hard">${I18nService.t("schedule.fixed")}</option><option value="flexible">${I18nService.t("schedule.flexible")}</option></select></label>${this.colorPaletteMarkup(value.color)}<span class="form-error" data-error="range"></span>`;
      ["title", "description", "dayOfWeek", "startTime", "endTime", "category"].forEach((name) => { form.elements[name].value = value[name]; }); form.addEventListener("input", () => { this.panelDirty = true; });
      form.addEventListener("submit", (event) => { event.preventDefault(); const title = form.elements.title.value.trim(); const valid = PlannerDataService.validateTimeRange(form.elements.startTime.value, form.elements.endTime.value).valid; form.querySelector('[data-error="title"]').textContent = title ? "" : I18nService.t("task.errorTitle"); form.querySelector('[data-error="range"]').textContent = valid ? "" : I18nService.t("schedule.errorRange"); if (!title || !valid) return; const next = { ...value, id: item?.id || PlannerDataService.id(), title, description: form.elements.description.value.slice(0, 5000), dayOfWeek: Number(form.elements.dayOfWeek.value), startTime: form.elements.startTime.value, endTime: form.elements.endTime.value, category: form.elements.category.value, color: form.elements.color.value, createdAt: item?.createdAt || new Date().toISOString(), updatedAt: new Date().toISOString() }; if (item) Object.assign(item, next); else this.currentWeek.idealItems.push(next); this.saveIdealWeek(); this.renderIdealWeek(); this.panelDirty = false; this.closeContextPanel(true); });
      if (item) { const actions = document.createElement("div"); actions.className = "editor-action-row"; const duplicate = document.createElement("button"); duplicate.type = "button"; duplicate.className = "secondary-button"; duplicate.textContent = I18nService.t("actions.duplicate"); duplicate.addEventListener("click", () => { this.currentWeek.idealItems.push({ ...structuredClone(item), id: PlannerDataService.id(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }); this.saveIdealWeek(); this.renderIdealWeek(); this.panelDirty = false; this.closeContextPanel(true); }); const remove = document.createElement("button"); remove.type = "button"; remove.className = "editor-danger"; remove.textContent = I18nService.t("actions.delete"); remove.addEventListener("click", () => this.confirmDeleteIdeal(item)); actions.append(duplicate, remove); form.append(actions); }
      this.elements.contextPanelBody.append(form); this.panelAction = () => form.requestSubmit(); window.setTimeout(() => form.elements.title.focus(), 0);
    },

    confirmDeleteIdeal(item) { this.openConfirmation(() => { const snapshot = structuredClone(this.currentWeek.idealItems); this.currentWeek.idealItems = this.currentWeek.idealItems.filter((value) => value.id !== item.id); this.saveIdealWeek(true); this.renderIdealWeek(); this.panelDirty = false; this.closeContextPanel(true); this.showUndoToast("ideal.deletedTitle", "ideal.deletedCopy", () => { this.currentWeek.idealItems = snapshot; this.saveIdealWeek(true); this.renderIdealWeek(); }); }, { titleKey: "schedule.deleteTitle", copyKey: "schedule.deleteCopy" }); },

    handleIdealDragStart(event) { const block = event.target.closest("[data-ideal-id]"); if (!block) return; this.draggedIdealItem = block.dataset.idealId; event.dataTransfer.setData("text/plain", `ideal:${this.draggedIdealItem}`); },
    handleIdealDrop(event) { const slot = event.target.closest("[data-slot-time]"); if (!slot || !this.draggedIdealItem) return; event.preventDefault(); const item = this.currentWeek.idealItems.find((value) => value.id === this.draggedIdealItem); if (!item) return; const duration = PlannerDataService.timeToMinutes(item.endTime) - PlannerDataService.timeToMinutes(item.startTime); const end = PlannerDataService.timeToMinutes(slot.dataset.slotTime) + duration; if (end > 1440) { this.showToast("task.limitTitle", "schedule.errorRange"); return; } item.dayOfWeek = Number(slot.dataset.day); item.startTime = slot.dataset.slotTime; item.endTime = PlannerDataService.minutesToTime(end); item.updatedAt = new Date().toISOString(); this.saveIdealWeek(); this.renderIdealWeek(); this.draggedIdealItem = null; },

    handleResizeStart(event, kind) {
      const handle = event.target.closest(`[data-resize="${kind}"]`); if (!handle) return; event.preventDefault(); event.stopPropagation();
      const block = handle.closest(kind === "ideal" ? "[data-ideal-id]" : "[data-record-id]"); const item = kind === "ideal" ? this.currentWeek.idealItems.find((value) => value.id === block.dataset.idealId) : this.recordsForDate(this.state.ui.selectedDate).find((value) => value.id === block.dataset.recordId); if (!item) return;
      const startY = event.clientY; const originalEnd = PlannerDataService.timeToMinutes(item.endTime); const start = PlannerDataService.timeToMinutes(item.startTime); const rowHeight = this.scheduleRowHeight();
      const move = (moveEvent) => { const steps = Math.round((moveEvent.clientY - startY) / rowHeight); const next = Math.max(start + 30, Math.min(1440, originalEnd + steps * 30)); block.style.height = `${(next - start) / 30 * rowHeight - 2}px`; };
      const up = (upEvent) => { window.removeEventListener("pointermove", move); window.removeEventListener("pointerup", up); const steps = Math.round((upEvent.clientY - startY) / rowHeight); const nextEnd = PlannerDataService.minutesToTime(Math.max(start + 30, Math.min(1440, originalEnd + steps * 30))); if (kind === "record" && item.isRecurrenceInstance) { const series = this.seriesCollection.items.find((value) => value.id === item.seriesId); if (series) this.chooseSeriesScope(item.recurrenceDate, (scope) => { this.applySeriesEdit(series, item.recurrenceDate, { ...item, endTime: nextEnd }, series.rule, series.until, scope); this.saveSeries(); this.renderPlannerData(); }); return; } item.endTime = nextEnd; item.updatedAt = new Date().toISOString(); if (kind === "ideal") { this.saveIdealWeek(); this.renderIdealWeek(); } else { this.saveWeek(); this.renderPlannerData(); } };
      window.addEventListener("pointermove", move); window.addEventListener("pointerup", up, { once: true });
    },

    openCopyIdealEditor(trigger) {
      if (!this.currentWeek.idealItems.length) { this.showToast("ideal.copyEmptyTitle", "ideal.copyEmptyCopy"); return; }
      this.prepareEditor("ideal.copyTitle", trigger); const form = document.createElement("form"); form.className = "editor-form"; form.innerHTML = `<label class="form-field"><span>${I18nService.t("ideal.targetWeek")}</span><input name="date" type="date" required></label><p class="editor-note" data-copy-note>${I18nService.t("ideal.copyConfirm")}</p><span class="form-error" data-error="future"></span>`;
      const nextWeek = DateService.toISO(DateService.addDays(DateService.fromISO(this.currentWeek.weekStart), 7)); form.elements.date.value = nextWeek; form.elements.date.min = nextWeek;
      const update = (markDirty = true) => { const selected = DateService.fromISO(form.elements.date.value); const weekStart = selected ? DateService.toISO(DateService.startOfWeek(selected)) : ""; const target = weekStart ? PlannerDataService.normalizeWeek(StorageService.read(StorageService.weekKey(weekStart), null), weekStart) : null; form.querySelector("[data-copy-note]").textContent = I18nService.t(target?.idealItems.length ? "ideal.copyDuplicate" : "ideal.copyConfirm"); form.querySelector('[data-error="future"]').textContent = weekStart && weekStart <= this.currentWeek.weekStart ? I18nService.t("ideal.copyFutureError") : ""; if (markDirty) this.panelDirty = true; };
      form.addEventListener("input", () => update(true)); update(false);
      form.addEventListener("submit", (event) => { event.preventDefault(); const date = DateService.fromISO(form.elements.date.value); if (!date) return; const weekStart = DateService.toISO(DateService.startOfWeek(date)); if (weekStart <= this.currentWeek.weekStart) { update(false); return; } const target = PlannerDataService.normalizeWeek(StorageService.read(StorageService.weekKey(weekStart), null), weekStart); const snapshot = structuredClone(target); const now = new Date().toISOString(); this.currentWeek.idealItems.forEach((item) => target.idealItems.push({ ...structuredClone(item), id: PlannerDataService.id(), createdAt: now, updatedAt: now })); this.writeWeekDirect(target); this.panelDirty = false; this.closeContextPanel(true); this.showUndoToast("ideal.copyDoneTitle", "ideal.copyDoneCopy", () => this.writeWeekDirect(snapshot)); });
      this.elements.contextPanelBody.append(form); this.panelAction = () => form.requestSubmit();
    },

    renderNotes() {
      this.elements.notesList.replaceChildren(); this.elements.notesEmpty.hidden = this.notes.items.length > 0;
      this.notes.items.forEach((note) => {
        const row = document.createElement("button"); row.type = "button"; row.className = "note-row"; row.dataset.noteId = note.id; row.style.setProperty("--note-color", this.goalColorValue(note.color));
        const marker = document.createElement("span"); marker.className = "note-color"; const copy = document.createElement("span"); copy.className = "note-row-copy"; const title = document.createElement("strong"); title.textContent = note.title; const description = document.createElement("span"); description.textContent = note.description; copy.append(title); if (description.textContent) copy.append(description);
        const tags = document.createElement("span"); tags.className = "note-tags"; tags.textContent = note.hashtags.map((tag) => `#${tag}`).join(" "); row.append(marker, copy); if (tags.textContent) row.append(tags); this.elements.notesList.append(row);
      });
    },

    openGlobalNoteEditor(note, trigger) {
      const value = note || { title: "", description: "", color: "royalIndigo", hashtags: [] }; this.prepareEditor(note ? "notes.edit" : "notes.new", trigger); const form = document.createElement("form"); form.className = "editor-form"; form.noValidate = true;
      form.innerHTML = `<label class="form-field"><span>${I18nService.t("notes.noteTitle")}</span><input name="title" maxlength="300" required><span class="form-error" data-error="title"></span></label><label class="form-field"><span>${I18nService.t("notes.description")}</span><textarea name="description" maxlength="10000"></textarea></label>${this.colorPaletteMarkup(value.color)}<label class="form-field"><span>${I18nService.t("notes.tags")}</span><input name="hashtags" list="knownHashtags" autocomplete="off"><small>${I18nService.t("record.tagsHint")}</small></label><datalist id="knownHashtags">${this.knownHashtags().map((tag) => `<option value="#${tag}"></option>`).join("")}</datalist>`;
      form.elements.title.value = value.title; form.elements.description.value = value.description; form.elements.hashtags.value = value.hashtags.map((tag) => `#${tag}`).join(" "); form.addEventListener("input", () => { this.panelDirty = true; });
      form.addEventListener("submit", (event) => { event.preventDefault(); const title = form.elements.title.value.trim(); form.querySelector('[data-error="title"]').textContent = title ? "" : I18nService.t("task.errorTitle"); if (!title) return; const next = { ...value, id: note?.id || PlannerDataService.id(), title, description: form.elements.description.value.slice(0, 10000), color: form.elements.color.value, hashtags: PlannerDataService.normalizeHashtags(form.elements.hashtags.value), createdAt: note?.createdAt || new Date().toISOString(), updatedAt: new Date().toISOString() }; if (note) Object.assign(note, next); else this.notes.items.push(next); this.saveNotes(); this.renderNotes(); this.renderSearchResults(); this.panelDirty = false; this.closeContextPanel(true); });
      if (note) { const actions = document.createElement("div"); actions.className = "editor-action-row"; const remove = document.createElement("button"); remove.type = "button"; remove.className = "editor-danger"; remove.textContent = I18nService.t("actions.delete"); remove.addEventListener("click", () => this.confirmDeleteGlobalNote(note)); actions.append(remove); form.append(actions); }
      this.elements.contextPanelBody.append(form); this.panelAction = () => form.requestSubmit(); window.setTimeout(() => form.elements.title.focus(), 0);
    },

    confirmDeleteGlobalNote(note) {
      this.openConfirmation(() => { const snapshot = structuredClone(this.notes); this.notes.items = this.notes.items.filter((item) => item.id !== note.id); this.saveNotes(true); this.renderNotes(); this.renderSearchResults(); this.panelDirty = false; this.closeContextPanel(true); this.showUndoToast("notes.deletedTitle", "notes.deletedCopy", () => { this.notes = snapshot; this.saveNotes(true); this.renderNotes(); this.renderSearchResults(); }); }, { titleKey: "notes.deleteTitle", copyKey: "notes.deleteCopy" });
    },

    scheduleSearch() { window.clearTimeout(this.searchTimer); this.searchTimer = window.setTimeout(() => this.renderSearchResults(), 250); },

    renderSearchState() { this.renderSearchResults(); },

    renderSearchResults() {
      if (!this.elements.searchResults) return;
      StorageService.flush();
      const filters = { query: this.elements.searchInput.value, type: this.elements.searchType.value, completion: this.elements.searchCompletion.value, from: this.elements.searchDateFrom.value, to: this.elements.searchDateTo.value, tags: this.elements.searchTags.value };
      const results = SearchService.filter(SearchService.collect(this.habits, this.seriesCollection, this.notes), filters).slice(0, 200);
      this.elements.searchResults.replaceChildren(); this.elements.searchEmpty.hidden = results.length > 0;
      const emptyTitle = this.elements.searchEmpty.querySelector("h3"); const emptyCopy = this.elements.searchEmpty.querySelector("p");
      emptyTitle.textContent = I18nService.t("search.noMatches"); emptyCopy.textContent = I18nService.t(filters.query.trim() || filters.tags.trim() || filters.type !== "all" || filters.completion !== "all" || filters.from || filters.to ? "search.noResultsCopy" : "search.emptyCopy");
      if (!results.length) return;
      const heading = document.createElement("p"); heading.className = "search-result-count"; heading.textContent = I18nService.t("search.results", { count: results.length }); this.elements.searchResults.append(heading);
      results.forEach((item) => {
        const article = document.createElement("article"); article.className = "search-result-card";
        const open = document.createElement("button"); open.type = "button"; open.className = "search-result-open"; Object.assign(open.dataset, { resultType: item.type, resultId: item.id, resultDate: item.date || "", resultWeek: item.weekStart || "", resultScope: item.globalNote ? "global-note" : "" });
        const meta = document.createElement("span"); meta.className = "search-result-meta"; meta.textContent = [I18nService.t(SearchService.typeLabelKey(item.type)), item.date, item.time].filter(Boolean).join(" · "); const title = document.createElement("strong"); title.textContent = item.title; const excerpt = document.createElement("span"); excerpt.textContent = (item.text || "").slice(0, 180); open.append(meta, title); if (excerpt.textContent) open.append(excerpt); article.append(open);
        if ((item.hashtags || []).length) { const tags = document.createElement("div"); tags.className = "result-tags"; item.hashtags.forEach((tag) => { const button = document.createElement("button"); button.type = "button"; button.dataset.searchTag = tag.replace(/^#/, ""); button.textContent = tag.startsWith("#") ? tag : `#${tag}`; tags.append(button); }); article.append(tags); }
        if ((item.files || []).length) { const files = document.createElement("small"); files.className = "search-result-files"; files.textContent = item.files.join(" · "); article.append(files); }
        this.elements.searchResults.append(article);
      });
    },

    handleSearchResultClick(event) {
      const tag = event.target.closest("[data-search-tag]"); if (tag) { this.elements.searchTags.value = tag.dataset.searchTag; this.scheduleSearch(); return; }
      const button = event.target.closest("[data-result-id]"); if (!button) return; const { resultType: type, resultId: id, resultDate: date, resultWeek: weekStart, resultScope: scope } = button.dataset;
      if (scope === "global-note") { const note = this.notes.items.find((item) => item.id === id); if (note) { this.showView("notes"); this.openGlobalNoteEditor(note, button); } return; }
      if (date && DateService.fromISO(date)) this.selectDate(date); else if (weekStart && DateService.fromISO(weekStart)) this.selectDate(weekStart);
      if (type === "task") { const found = this.findTask(id); if (found) { this.showView("day"); this.openTaskEditor(found.task, found.list, button); } }
      else if (["fixed", "flexible", "note"].includes(type)) { const record = this.currentWeek.records.find((item) => item.id === id); if (record) { if (type !== "note") this.showView("day"); this.openRecordEditor(record, type === "note" ? { type: "note" } : null, button); } }
      else if (type === "series") { const series = this.seriesCollection.items.find((item) => item.id === id); const instance = series && RecurrenceService.instance(series, series.startDate); if (instance) this.openRecordEditor(instance, instance.type === "note" ? { type: "note" } : null, button); }
      else if (type === "goal") { const index = this.currentWeek.goals.findIndex((item) => item?.id === id); if (index >= 0) { this.showView("week"); this.openGoalEditor(index, button); } }
      else if (type === "subtask") { for (let index = 0; index < 4; index += 1) { const subtaskIndex = this.currentWeek.goals[index]?.subtasks.findIndex((item) => item.id === id) ?? -1; if (subtaskIndex >= 0) { this.showView("week"); this.openSubtaskEditor(index, subtaskIndex, button); break; } } }
      else if (type === "habit") { const index = this.habits.slots.findIndex((slot) => slot.id === id); if (index >= 0) { this.showView("week"); this.openHabitEditor(index, button); } }
      else if (type === "ideal") { const item = this.currentWeek.idealItems.find((value) => value.id === id); if (item) { this.showView("ideal"); this.openIdealEditor(item, null, button); } }
    },

    observeEditorForms() {
      const observer = new MutationObserver(() => this.elements.contextPanelBody.querySelectorAll("form.editor-form").forEach((form) => this.enhanceDictation(form)));
      observer.observe(this.elements.contextPanelBody, { childList: true, subtree: true });
    },

    enhanceDictation(form) {
      form.querySelectorAll('input[name="title"], input[name="name"], input[name="text"], textarea[name="text"], textarea[name="description"]').forEach((field) => {
        if (field.dataset.speechReady) return; field.dataset.speechReady = "true"; const button = document.createElement("button"); button.type = "button"; button.className = "speech-button"; button.setAttribute("aria-label", I18nService.t("speech.button")); button.title = I18nService.t("speech.button"); button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Zm-6 9a6 6 0 0 0 12 0M12 18v3M9 21h6"/></svg>'; button.addEventListener("click", () => this.toggleDictation(button, field)); field.insertAdjacentElement("afterend", button);
      });
    },

    toggleSpeechConsent() {
      if (this.state.settings.speechConsent) { this.state.settings.speechConsent = false; this.activeRecognition?.stop(); this.saveSettings(); this.syncSettingsControls(); this.showToast("speech.revokedTitle", "speech.revokedCopy"); return; }
      this.openConfirmation(() => { this.state.settings.speechConsent = true; this.saveSettings(); this.syncSettingsControls(); }, { titleKey: "speech.consentTitle", copyKey: "speech.consentCopy" });
    },

    toggleDictation(button, field) {
      if (this.activeRecognition) { this.activeRecognition.stop(); return; }
      if (!this.state.settings.speechConsent) { this.openConfirmation(() => { this.state.settings.speechConsent = true; this.saveSettings(); this.syncSettingsControls(); this.startDictation(button, field); }, { titleKey: "speech.consentTitle", copyKey: "speech.consentCopy" }); return; }
      this.startDictation(button, field);
    },

    startDictation(button, field) {
      if (!navigator.onLine) { this.showToast("speech.offlineTitle", "speech.offlineCopy"); return; }
      const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition; if (!Recognition) { this.showToast("speech.unavailableTitle", "speech.unavailableCopy"); return; }
      const recognition = new Recognition(); const choice = this.state.settings.speechLanguage; recognition.lang = choice === "ru" ? "ru-RU" : choice === "en" ? "en-US" : (this.state.settings.language === "ru" ? "ru-RU" : "en-US"); recognition.interimResults = false; recognition.continuous = false;
      const originalLabel = button.getAttribute("aria-label"); button.classList.add("is-listening"); button.setAttribute("aria-label", I18nService.t("speech.stop")); this.activeRecognition = recognition;
      recognition.onresult = (event) => { const text = [...event.results].map((result) => result[0]?.transcript || "").join(" "); const start = Number.isFinite(field.selectionStart) ? field.selectionStart : field.value.length; const end = Number.isFinite(field.selectionEnd) ? field.selectionEnd : start; field.setRangeText(text, start, end, "end"); field.dispatchEvent(new Event("input", { bubbles: true })); };
      recognition.onerror = () => this.showToast("speech.unavailableTitle", "speech.unavailableCopy"); recognition.onend = () => { this.activeRecognition = null; button.classList.remove("is-listening"); button.setAttribute("aria-label", originalLabel); field.focus(); };
      try { recognition.start(); } catch { this.activeRecognition = null; button.classList.remove("is-listening"); this.showToast("speech.unavailableTitle", "speech.unavailableCopy"); }
    },

    businessCardIsValid(card = this.state.settings.businessCard) { return Boolean(card.name?.trim() && card.company?.trim() && card.telegram?.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(card.email || "")); },

    saveBusinessCard(event) {
      event.preventDefault(); const form = this.elements.businessCardForm; const card = { name: form.elements.name.value.trim().slice(0, 120), company: form.elements.company.value.trim().slice(0, 160), telegram: form.elements.telegram.value.trim().slice(0, 100), email: form.elements.email.value.trim().slice(0, 254) };
      this.elements.businessCardError.textContent = this.businessCardIsValid(card) ? "" : I18nService.t("card.error"); if (!this.businessCardIsValid(card)) return;
      this.state.settings.businessCard = card; this.saveSettings(); this.renderBusinessCard(); this.showToast("card.savedTitle", "card.savedCopy");
    },

    renderBusinessCard() {
      if (!this.elements.businessCardForm) return; const card = this.state.settings.businessCard || {}; const form = this.elements.businessCardForm;
      ["name", "company", "telegram", "email"].forEach((name) => { if (document.activeElement !== form.elements[name]) form.elements[name].value = card[name] || ""; });
      document.querySelectorAll("[data-card-variant]").forEach((button) => button.classList.toggle("is-active", button.dataset.cardVariant === this.state.settings.cardVariant));
      const preview = this.elements.businessCardPreview; preview.className = `business-card-preview is-${this.state.settings.cardVariant}`; preview.replaceChildren();
      const company = document.createElement("span"); company.textContent = card.company || I18nService.t("card.company"); const name = document.createElement("strong"); name.textContent = card.name || I18nService.t("card.name"); const contacts = document.createElement("small"); contacts.textContent = [card.telegram || "@telegram", card.email || "email@example.com"].join(" · "); preview.append(company, name, contacts);
    },

    openTelegramPreview(record) {
      if (!this.businessCardIsValid()) { this.showToast("telegram.cardMissingTitle", "telegram.cardMissingCopy"); this.showView("settings"); return; }
      const card = this.state.settings.businessCard; const body = this.elements.telegramPreviewBody; body.replaceChildren(); const entry = document.createElement("section"); entry.className = "telegram-entry-card"; entry.style.setProperty("--record-color", this.goalColorValue(record.color || "royalIndigo")); const title = document.createElement("strong"); title.textContent = record.title || I18nService.t("schedule.title"); const text = document.createElement("p"); text.textContent = record.description || ""; const meta = document.createElement("small"); meta.textContent = [record.date, record.startTime && `${record.startTime}–${record.endTime}`, ...(record.hashtags || []).map((tag) => `#${tag.replace(/^#/, "")}`)].filter(Boolean).join(" · "); const files = document.createElement("small"); files.textContent = (record.fileNames || []).join(" · "); entry.append(title, text, meta); if (files.textContent) entry.append(files); const signature = document.createElement("section"); signature.className = `business-card-preview is-${this.state.settings.cardVariant}`; [card.company, card.name, `${card.telegram} · ${card.email}`].forEach((value, index) => { const element = document.createElement(index === 1 ? "strong" : index === 2 ? "small" : "span"); element.textContent = value; signature.append(element); }); body.append(entry, signature);
      this.elements.telegramModal.hidden = false; this.elements.app.inert = true; window.setTimeout(() => this.elements.closeTelegram.focus(), 0);
    },

    closeTelegramPreview() { this.elements.telegramModal.hidden = true; this.elements.app.inert = false; },

    showReminderGroup(records) {
      const toast = document.createElement("article"); toast.className = "toast reminder-toast"; const title = document.createElement("strong"); title.textContent = I18nService.t(records.length === 1 ? "reminder.singleTitle" : "reminder.groupTitle", { count: records.length }); toast.append(title);
      records.slice(0, 3).forEach((record) => { const button = document.createElement("button"); button.type = "button"; button.textContent = I18nService.t("reminder.at", { time: record.startTime, title: record.title }); button.addEventListener("click", () => { this.selectDate(record.date); this.showView("day"); this.openRecordEditor(record, null, button); toast.remove(); }); toast.append(button); });
      if (records.length > 3) { const more = document.createElement("small"); more.textContent = I18nService.t("reminder.more", { count: records.length - 3 }); toast.append(more); }
      const visible = this.elements.toastRegion.querySelectorAll(".reminder-toast"); if (visible.length >= 3) visible[0].remove(); this.elements.toastRegion.append(toast); if (this.state.settings.soundEnabled) this.playReminderTone(); window.setTimeout(() => toast.remove(), 12000);
    },

    playReminderTone() { try { const AudioContextClass = window.AudioContext || window.webkitAudioContext; if (!AudioContextClass) return; const context = new AudioContextClass(); const oscillator = context.createOscillator(); const gain = context.createGain(); oscillator.frequency.value = 620; gain.gain.value = 0.035; oscillator.connect(gain); gain.connect(context.destination); oscillator.start(); gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.35); oscillator.stop(context.currentTime + 0.36); } catch { /* Sound is optional. */ } },

    renderAriaLabels() {
      this.elements.previousWeek.setAttribute("aria-label", I18nService.t("aria.previousWeek"));
      this.elements.nextWeek.setAttribute("aria-label", I18nService.t("aria.nextWeek"));
      this.elements.weekLabel.setAttribute("aria-label", I18nService.t("aria.chooseDate"));
      this.elements.datePicker.parentElement.setAttribute("aria-label", I18nService.t("aria.chooseDate"));
      this.elements.themeQuickToggle.setAttribute("aria-label", I18nService.t("aria.changeTheme"));
      this.elements.languageToggle.setAttribute("aria-label", I18nService.t("aria.changeLanguage"));
      this.elements.closeContextPanel.setAttribute("aria-label", I18nService.t("aria.closePanel"));
      this.elements.addMainTask.setAttribute("aria-label", I18nService.t("task.addMain"));
      this.elements.addOtherTask.setAttribute("aria-label", I18nService.t("task.addOther"));
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
      const allowed = ["overview", "week", "day", "ideal", "notes", "search", "settings", "help"];
      const target = allowed.includes(view) ? view : "overview";
      const previous = this.state.ui.view;
      this.state.ui.view = target;
      document.querySelectorAll(".view").forEach((section) => section.classList.toggle("is-active", section.dataset.view === target));
      document.querySelectorAll("[data-view-target]").forEach((button) => {
        const active = button.dataset.viewTarget === target;
        button.classList.toggle("is-active", active);
        if (active) button.setAttribute("aria-current", "page");
        else button.removeAttribute("aria-current");
      });
      this.elements.viewTitle.textContent = I18nService.t(`nav.${target}`);
      if (previous !== target) window.scrollTo({ top: 0, behavior: "auto" });
      if (save) this.saveUI();
    },

    selectDate(iso) {
      const date = DateService.fromISO(iso);
      if (!date) return;
      const previousWeek = this.state.ui.selectedWeek;
      this.state.ui.selectedDate = iso;
      this.state.ui.selectedWeek = DateService.toISO(DateService.startOfWeek(date));
      if (previousWeek !== this.state.ui.selectedWeek) this.loadWeek(this.state.ui.selectedWeek);
      this.renderWeekNavigation();
      this.renderDayHeading();
      this.renderPlannerData();
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
      this.elements.scheduleScale.value = this.state.settings.scheduleScale;
      this.elements.speechLanguageSelect.value = this.state.settings.speechLanguage;
      this.elements.speechConsentToggle.textContent = I18nService.t(this.state.settings.speechConsent ? "settings.revokeConsent" : "settings.giveConsent");
    },

    saveSettings() {
      const { businessCard, ...settings } = this.state.settings;
      StorageService.schedule(StorageService.keys.settings, settings);
      StorageService.schedule(StorageService.keys.businessCard, businessCard);
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

    renderStorageUsage() {
      if (!this.elements.storageUsageText) return;
      let usage;
      try { usage = StorageService.usage(); } catch (error) { return; }
      const kilobytes = usage.bytes / 1024;
      const percent = Math.min(100, Math.round(usage.percent * 10) / 10);
      this.elements.storageUsageText.textContent = `${kilobytes < 10 ? kilobytes.toFixed(1) : Math.round(kilobytes)} КБ · ${percent}%`;
      this.elements.storageUsageBar.style.width = `${percent}%`;
      const meter = this.elements.storageUsageBar.parentElement;
      meter.setAttribute("aria-valuenow", String(Math.round(percent)));
      this.elements.storageWeekCount.textContent = I18nService.t("data.weeks", { count: usage.weeks });
      const warningKey = percent >= 95 ? "data.warning95" : percent >= 80 ? "data.warning80" : null;
      this.elements.storageWarning.hidden = !warningKey;
      this.elements.storageWarning.textContent = warningKey ? I18nService.t(warningKey) : "";
      this.elements.storageSummary.classList.toggle("is-critical", percent >= 95);
      if (!this.elements.oldWeekCutoff.value) this.elements.oldWeekCutoff.value = this.state?.ui?.selectedWeek || DateService.toISO(DateService.startOfWeek(new Date()));
      const count = this.oldWeekStarts().length;
      this.elements.oldWeekCount.textContent = I18nService.t("data.oldWeeks", { count });
    },

    oldWeekStarts() {
      const cutoff = this.elements.oldWeekCutoff?.value;
      if (!DateService.fromISO(cutoff)) return [];
      const index = StorageService.read(StorageService.keys.weekIndex, []);
      return (Array.isArray(index) ? index : []).map((item) => item?.weekStart).filter((weekStart) => DateService.fromISO(weekStart) && weekStart < cutoff);
    },

    downloadJson(value, fileName) {
      try {
        const blob = new Blob([JSON.stringify(value, null, 2)], { type: "application/json;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = fileName;
        document.body.append(link);
        link.click();
        link.remove();
        window.setTimeout(() => URL.revokeObjectURL(url), 0);
        return true;
      } catch (error) {
        this.showToast("toast.saveErrorTitle", "toast.saveErrorCopy", "error", 7000);
        return false;
      }
    },

    backupFileName() {
      const now = new Date();
      const date = DateService.toISO(now);
      const time = `${String(now.getHours()).padStart(2, "0")}${String(now.getMinutes()).padStart(2, "0")}`;
      return `premium-planner-backup-${date}-${time}.json`;
    },

    downloadBackup() {
      try { return this.downloadJson(StorageService.backup(), this.backupFileName()); }
      catch (error) { this.showToast("toast.saveErrorTitle", "toast.saveErrorCopy", "error", 7000); return false; }
    },

    openBackupWorkflow(action, options = {}) {
      this.backupFocusedElement = options.focusTarget || document.activeElement;
      this.pendingDataAction = action;
      this.backupDownloaded = false;
      this.elements.backupSavedCheck.checked = false;
      this.elements.deletePhraseField.hidden = !options.requireDeletePhrase;
      this.elements.deletePhraseInput.value = "";
      this.elements.backupDialogText.textContent = I18nService.t(options.copyKey || "backup.copy");
      this.elements.backupDialog.hidden = false;
      this.elements.app.inert = true;
      this.updateBackupContinue();
      this.elements.backupDownloadButton.focus();
    },

    updateBackupContinue() {
      const expected = this.state.settings.language === "ru" ? "УДАЛИТЬ ВСЕ" : "DELETE ALL";
      const phraseValid = this.elements.deletePhraseField.hidden || this.elements.deletePhraseInput.value === expected;
      this.elements.backupContinueButton.disabled = !(this.backupDownloaded && this.elements.backupSavedCheck.checked && phraseValid);
    },

    closeBackupWorkflow(preserveImport = false) {
      this.elements.backupDialog.hidden = true;
      this.elements.app.inert = false;
      this.pendingDataAction = null;
      this.backupDownloaded = false;
      this.elements.backupSavedCheck.checked = false;
      if (!preserveImport) this.importCandidate = null;
      const focusTarget = this.backupFocusedElement;
      this.backupFocusedElement = null;
      focusTarget?.focus();
    },

    continueBackupWorkflow() {
      if (this.elements.backupContinueButton.disabled) return;
      const action = this.pendingDataAction;
      this.closeBackupWorkflow(true);
      action?.();
    },

    async handleImportFile(event) {
      const file = event.target.files?.[0];
      event.target.value = "";
      if (!file) return;
      let parsed;
      try { parsed = JSON.parse(await file.text()); }
      catch (error) { this.showToast("import.invalidTitle", "import.invalidCopy", "error", 7000); return; }
      const validation = StorageService.validateBackup(parsed);
      if (!validation.valid) { this.showToast("import.invalidTitle", "import.invalidCopy", "error", 7000); return; }
      this.importCandidate = validation.data;
      if (!this.elements.recoveryScreen.hidden) {
        if (!this.corruptDownloaded) { this.importCandidate = null; this.showToast("recovery.title", "recovery.copy", "error", 7000); return; }
        this.confirmImport();
      } else {
        this.openBackupWorkflow(() => this.confirmImport());
      }
    },

    confirmImport() {
      this.openConfirmation(() => {
        const result = StorageService.replaceAll(this.importCandidate);
        this.importCandidate = null;
        if (!result.ok) { this.showToast("import.rollbackTitle", "import.rollbackCopy", "error", 8000); return; }
        this.elements.recoveryScreen.hidden = true;
        this.reloadFromStorage();
        this.showToast("import.doneTitle", "import.doneCopy");
      }, { titleKey: "import.confirmTitle", copyKey: "import.confirmCopy", cancelAction: () => { this.importCandidate = null; } });
    },

    requestClearSelectedWeek(trigger) {
      this.openBackupWorkflow(() => this.openConfirmation(() => this.clearSelectedWeek(), { titleKey: "clear.weekTitle", copyKey: "clear.weekCopy" }), { focusTarget: trigger });
    },

    excludeRecurringWeeks(weekStarts) {
      weekStarts.forEach((weekStart) => {
        for (let offset = 0; offset < 7; offset += 1) {
          const date = DateService.toISO(DateService.addDays(DateService.fromISO(weekStart), offset));
          this.seriesCollection.items.forEach((series) => { if (RecurrenceService.occurs(series, date)) series.exceptions[date] = { deleted: true }; });
        }
      });
    },

    clearSelectedWeek() {
      const weekStart = this.state.ui.selectedWeek;
      const weekKey = StorageService.weekKey(weekStart);
      const previousRaw = localStorage.getItem(weekKey);
      const previousIndex = structuredClone(StorageService.read(StorageService.keys.weekIndex, []));
      const previousSeries = structuredClone(this.seriesCollection);
      this.excludeRecurringWeeks([weekStart]);
      const nextIndex = previousIndex.filter((item) => item?.weekStart !== weekStart);
      if (!StorageService.removeKeys([weekKey])) return;
      StorageService.writeNow(StorageService.keys.weekIndex, nextIndex);
      this.saveSeries(true);
      this.currentWeek = PlannerDataService.emptyWeek(weekStart);
      this.renderPlannerData();
      this.renderSearchState();
      this.renderStorageUsage();
      this.showUndoToast("clear.weekDoneTitle", "clear.weekDoneCopy", () => {
        if (previousRaw !== null) StorageService.writeNow(weekKey, JSON.parse(previousRaw));
        StorageService.writeNow(StorageService.keys.weekIndex, previousIndex);
        this.seriesCollection = previousSeries;
        this.saveSeries(true);
        this.loadWeek(weekStart);
        this.renderPlannerData();
        this.renderStorageUsage();
      });
    },

    requestClearOldWeeks(trigger) {
      const weeks = this.oldWeekStarts();
      if (!weeks.length) { this.showToast("clear.oldEmptyTitle", "clear.oldEmptyCopy"); return; }
      this.openBackupWorkflow(() => this.openConfirmation(() => this.clearOldWeeks(weeks), { titleKey: "clear.oldTitle", copyKey: "clear.oldCopy" }), { focusTarget: trigger });
    },

    clearOldWeeks(weeks) {
      const index = StorageService.read(StorageService.keys.weekIndex, []);
      this.excludeRecurringWeeks(weeks);
      if (!StorageService.removeKeys(weeks.map((weekStart) => StorageService.weekKey(weekStart)))) return;
      StorageService.writeNow(StorageService.keys.weekIndex, index.filter((item) => !weeks.includes(item?.weekStart)));
      this.saveSeries(true);
      if (weeks.includes(this.currentWeek.weekStart)) this.currentWeek = PlannerDataService.emptyWeek(this.currentWeek.weekStart);
      this.renderPlannerData();
      this.renderSearchState();
      this.renderStorageUsage();
    },

    requestClearAllData(trigger) {
      this.openBackupWorkflow(() => this.openConfirmation(() => this.clearAllData(), { titleKey: "clear.allTitle", copyKey: "clear.allCopy" }), { requireDeletePhrase: true, focusTarget: trigger });
    },

    clearAllData() {
      StorageService.queue.clear();
      if (!StorageService.removeKeys(StorageService.appKeys(true))) return;
      this.reloadFromStorage();
      this.showOnboarding(0);
    },

    showRecoveryScreen() {
      this.corruptDownloaded = false;
      this.elements.recoveryResetButton.disabled = true;
      this.elements.recoveryScreen.hidden = false;
      this.elements.app.inert = true;
      this.elements.downloadCorruptButton.focus();
    },

    requestRecoveryReset() {
      if (!this.corruptDownloaded) return;
      this.openConfirmation(() => {
        StorageService.queue.clear();
        if (!StorageService.removeKeys(StorageService.appKeys(true))) return;
        this.elements.recoveryScreen.hidden = true;
        this.elements.app.inert = false;
        this.reloadFromStorage();
        this.showOnboarding(0);
      }, { titleKey: "recovery.resetTitle", copyKey: "recovery.resetCopy" });
    },

    reloadFromStorage() {
      StorageService.faults = [];
      this.state = StorageService.initialize();
      this.state.ui.view = "overview";
      this.state.ui.selectedDate = DateService.todayISO();
      this.state.ui.selectedWeek = DateService.toISO(DateService.startOfWeek(new Date()));
      this.habits = PlannerDataService.normalizeHabits(StorageService.read(StorageService.keys.habits, null));
      this.notes = PlannerDataService.normalizeNotes(StorageService.read(StorageService.keys.notes, null));
      this.seriesCollection = RecurrenceService.normalize(StorageService.read(StorageService.keys.series, null));
      this.loadWeek(this.state.ui.selectedWeek);
      ThemeService.apply(this.state.settings.theme);
      this.applySidebarState(false);
      this.renderAll();
    },

    trapFocus(event, container) {
      const focusable = [...container.querySelectorAll('button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter((element) => !element.hidden && element.offsetParent !== null);
      if (!focusable.length) return;
      const first = focusable[0]; const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
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
      this.panelDirty = false;
      this.panelAction = () => this.closeContextPanel(true);
      this.elements.contextPanelDone.querySelector("span").textContent = I18nService.t("actions.understood");
      this.elements.panelScrim.hidden = false;
      this.elements.contextPanel.classList.add("is-open");
      this.elements.contextPanel.setAttribute("aria-hidden", "false");
      document.querySelector(".sidebar").inert = true;
      document.querySelector(".workspace").inert = true;
      this.elements.closeContextPanel.focus();
    },

    closeContextPanel(force = false) {
      if (this.panelDirty && !force) {
        this.openConfirmation(() => this.closeContextPanel(true), {
          titleKey: "confirm.unsavedTitle",
          copyKey: "confirm.unsavedCopy"
        });
        return;
      }
      this.elements.contextPanel.classList.remove("is-open");
      this.elements.contextPanel.setAttribute("aria-hidden", "true");
      this.elements.panelScrim.hidden = true;
      document.querySelector(".sidebar").inert = false;
      document.querySelector(".workspace").inert = false;
      this.panelAction = null;
      this.panelDirty = false;
      this.lastFocusedElement?.focus();
    },

    openConfirmation(action, options = {}) {
      this.confirmationAction = action;
      this.confirmationCancelAction = options.cancelAction || null;
      this.confirmationFocusedElement = document.activeElement;
      this.elements.confirmTitle.textContent = I18nService.t(options.titleKey || "confirm.restartTitle");
      this.elements.confirmText.textContent = I18nService.t(options.copyKey || "confirm.restartCopy");
      this.elements.confirmAccept.textContent = I18nService.t(options.acceptKey || "actions.continue");
      this.elements.confirmDialog.hidden = false;
      this.elements.app.inert = true;
      this.elements.confirmCancel.focus();
    },

    closeConfirmation() {
      this.elements.confirmDialog.hidden = true;
      this.elements.app.inert = false;
      if (this.elements.contextPanel.getAttribute("aria-hidden") === "false") {
        document.querySelector(".sidebar").inert = true;
        document.querySelector(".workspace").inert = true;
      }
      this.confirmationAction = null;
      this.confirmationCancelAction = null;
      const focusTarget = this.confirmationFocusedElement;
      this.confirmationFocusedElement = null;
      focusTarget?.focus();
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
    },

    showUndoToast(titleKey, copyKey, callback) {
      const toast = document.createElement("div");
      toast.className = "toast has-action";
      toast.setAttribute("role", "status");
      const copy = document.createElement("div");
      const title = document.createElement("strong");
      title.textContent = I18nService.t(titleKey);
      const text = document.createElement("p");
      text.textContent = I18nService.t(copyKey);
      const actions = document.createElement("div");
      actions.className = "toast-action-row";
      const undo = document.createElement("button");
      undo.type = "button";
      undo.className = "toast-action";
      undo.textContent = I18nService.t("actions.undo");
      const close = document.createElement("button");
      close.type = "button";
      close.setAttribute("aria-label", I18nService.t("actions.close"));
      close.textContent = "×";
      let active = true;
      undo.addEventListener("click", () => {
        if (!active) return;
        active = false;
        toast.remove();
        callback();
      });
      close.addEventListener("click", () => { active = false; toast.remove(); });
      actions.append(undo, close);
      copy.append(title, text, actions);
      toast.append(copy);
      this.elements.toastRegion.append(toast);
      window.setTimeout(() => { active = false; toast.remove(); }, 7000);
    }
  };

  AppController.start();
})();
