function course_registration(id, course) {
    this.id = id;
    this.course = course;
    return `${this.id} registered for ${this.course}`;
}