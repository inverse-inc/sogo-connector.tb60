window.addEventListener("load", SCOnLoad, false);

function SCOnLoad()
{
    let item = window.calendarEvent;

    if (item === null) {
	// TODO: handle Thunderbird 52 with iframe options
	return;
    }

    if (item.id === null) { /* item is new */
        let prefName = null;
        if (cal.isEvent(item)) {
            prefName = "calendar.events.default-classification";
        }
        else if (cal.isToDo(item)) {
            prefName = "calendar.todos.default-classification";
        }
        if (prefName) {
            gPrivacy = getPrefSafe(prefName, "PUBLIC");
            updatePrivacy();
        }
    }
}
