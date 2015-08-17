// jshint devel:true


/**
 * 创建对象，包括几种获取不同时间的方法
 */
  class diffTime {

    constructor(prev) {
      this.now = new Date();
      this.prev = new Date(prev);
    }

    totalSeconds() {
      return parseInt((this.now - this.prev) / 1000);
    }

    years() {
      let _year = this.now.getFullYear() - this.prev.getFullYear() - 1;
      return _year;
    }

    months() {
      let _mon = parseInt(this.totalSeconds() / 30 / 24 / 60 / 60 - (12 * this.years()));
      return _mon;
    }

    days() {
      let _day = parseInt(this.totalSeconds() / 60 / 60 / 24 - 365 * this.years() - this.months() * 30);
      return _day;
    }

    hours() {
      let _hours = this.now.getHours() - this.prev.getHours();
      return _hours;
    }

    minutes() {
      let _minutes = this.now.getMinutes();
      return _minutes;
    }

    seconds() {
      let _seconds = this.now.getSeconds();
      return _seconds;
    }
  }

