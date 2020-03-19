class Timer {
  public timeRemaining = 0
  public isTimeUp = false

  private intervalId: any
  private _totalSet = 0

  constructor() {
  }


  private _setTimeRemaining(additionalTotal: number) {
    this.timeRemaining += additionalTotal
    this._totalSet = this.timeRemaining
  }

  add(amt: number, unit: string): Timer {
    switch (unit) {
      case 'minutes':
        this._setTimeRemaining(amt * 60)
        break
      case 'seconds':
        this._setTimeRemaining(amt)
        break
      default:
        this._setTimeRemaining(amt)
    }
    return this
  }

  setTimeUp() {
    this.isTimeUp = true
  }

  startTimer() {
    if (this.intervalId) return;

    this.intervalId = setInterval(() => {
      console.log('in interval timer')
      if (this.timeRemaining > 0) {
        this.timeRemaining -= 1
      } else {
        this.setTimeUp()
        clearInterval(this.intervalId)
      }
    }, 1000)
  }

  stopTimer() {
    clearInterval(this.intervalId)
    this.timeRemaining = this._totalSet
  }
}

export default Timer