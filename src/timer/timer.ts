import moment from 'moment'

class Timer {
  public timeRemaining = 0
  public isTimeUp = false

  private intervalId

  constructor() {
  }

  add(amt: number, unit: string): Timer {
    switch (unit) {
      case 'minutes':
        this.timeRemaining += amt * 60
        break
      case 'seconds':
        this.timeRemaining += amt
        break
      default:
        this.timeRemaining += amt
    }
    return this
  }

  startTimer() {
    if (this.intervalId) return;

    this.intervalId = setInterval(() => {
      if (this.timeRemaining > 0) {
        this.timeRemaining -= 1
      } else {
        this.isTimeUp = true
        clearInterval(this.intervalId)
      }
    })
  }
}

export default Timer