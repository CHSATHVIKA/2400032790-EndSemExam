function event_calendar(name, date) {
    this.name = name;
    this.date = date;
    return `${this.name} is scheduled on ${this.date}`;
}