const Employee = require('./employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    if (!github || !github.trim().length) {
      throw new Error("Expected parameter 'github' to be a non-empty string");
    }
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return 'engineer';
  }
}

module.exports = Engineer;
