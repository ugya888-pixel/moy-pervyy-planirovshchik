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

  Object.assign(TRANSLATIONS.ru, {
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
    "color.nobleSage": "Благородный шалфей"
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
    "color.nobleSage": "Noble sage"
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
    keys: {
      meta: "premiumPlanner.meta",
      settings: "premiumPlanner.settings",
      ui: "premiumPlanner.ui",
      weekIndex: "premiumPlanner.weekIndex",
      habits: "premiumPlanner.habits"
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

    writeNow(key, value) {
      this.queue.delete(key);
      try {
        localStorage.setItem(key, JSON.stringify(value));
        this.onStatus("saved");
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
        updatedAt: null
      };
    },

    normalizeWeek(value, weekStart) {
      const fallback = this.emptyWeek(weekStart);
      if (!value || value.schemaVersion !== 1 || value.weekStart !== weekStart) return fallback;
      const goals = Array.isArray(value.goals) ? value.goals.slice(0, 4) : [];
      while (goals.length < 4) goals.push(null);
      return {
        ...fallback,
        ...value,
        goals: goals.map((goal) => this.normalizeGoal(goal)),
        habitMarks: value.habitMarks && typeof value.habitMarks === "object" ? value.habitMarks : {},
        days: value.days && typeof value.days === "object" ? value.days : {},
        records: Array.isArray(value.records) ? value.records : []
      };
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
          hashtags: Array.isArray(item?.hashtags) ? item.hashtags.filter((tag) => typeof tag === "string") : [],
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
        .map((tag) => `#${tag.toLocaleLowerCase()}`)
        .filter((tag) => !seen.has(tag) && seen.add(tag));
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

    elements: {},

    start() {
      this.cacheElements();
      StorageService.onStatus = (status) => this.renderSaveStatus(status);
      StorageService.onError = () => this.showToast("toast.saveErrorTitle", "toast.saveErrorCopy", "error", 7000);
      this.state = StorageService.initialize();
      this.state.ui.view = "overview";
      this.state.ui.selectedDate = DateService.todayISO();
      this.state.ui.selectedWeek = DateService.toISO(DateService.startOfWeek(new Date()));
      this.habits = PlannerDataService.normalizeHabits(StorageService.read(StorageService.keys.habits, null));
      this.loadWeek(this.state.ui.selectedWeek);

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
        confirmTitle: byId("confirmTitle"),
        confirmText: byId("confirmText"),
        confirmCancel: byId("confirmCancel"),
        confirmAccept: byId("confirmAccept"),
        toastRegion: byId("toastRegion")
      };
    },

    buildStaticPreviews() {
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
      this.elements.quickAddGoal.addEventListener("click", () => this.addGoalFromFirstEmpty(this.elements.quickAddGoal));
      this.elements.addHabitButton.addEventListener("click", () => this.addHabitFromFirstEmpty(this.elements.addHabitButton));
      this.elements.goalBoard.addEventListener("click", (event) => this.handleGoalBoardClick(event));
      this.elements.habitTable.addEventListener("click", (event) => this.handleHabitTableClick(event));
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
      this.elements.searchInput.addEventListener("input", () => this.renderSearchState());

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
        if (event.key !== "Escape") return;
        if (!this.elements.confirmDialog.hidden) this.closeConfirmation();
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
            tags.textContent = subtask.hashtags.join(" ");
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

      const todayRecords = this.currentWeek.weekStart <= today && DateService.toISO(DateService.addDays(DateService.fromISO(this.currentWeek.weekStart), 6)) >= today
        ? this.currentWeek.records.filter((record) => record.date === today)
        : [];
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
      form.elements.tags.value = subtask?.hashtags.join(" ") || "";
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
