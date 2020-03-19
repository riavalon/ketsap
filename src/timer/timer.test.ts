import Timer from './timer'

const setInterval = jest.spyOn(window, 'setInterval')

describe('timer', () => {

  afterEach(() => {
    setInterval.mockReset()
  })

  it('should allow you to add time to the totalTime', () => {
    const t = new Timer().add(25, 'minutes')
    expect(t.timeRemaining).toEqual((25*60))
  })

  it('should allow you to start the timer and decrement time remaining by one every 1000 ms', () => {
    const t = new Timer().add(25, 'minutes')
    t.startTimer()

    expect(setInterval).toHaveBeenCalled()
  })

  it('should set isTimeUp to true if timeRemaining hits zero', () => {
    setInterval.mockImplementation(function(fn: Function, _: number): any {
      for (let i = 0; i < 6; i++) {
        fn()
      }
    })

    const clearInterval = jest.spyOn(window, 'clearInterval')
    const t = new Timer().add(5, 'seconds')
    expect(t.isTimeUp).toBeFalsy()
    t.startTimer()
    expect(setInterval).toHaveBeenCalled()
    expect(clearInterval).toHaveBeenCalled()
    expect(t.isTimeUp).toBeTruthy()
  })

  it('should print value of time with getter', () => {
    const t = new Timer().add(5, 'minutes').add(23, 'seconds')
    expect(t.format).toEqual('05:23')
  })

  it('should stopTimer to original timeRemaining when stopping', () => {
    setInterval.mockImplementation(function(fn: Function, ms: number): any {
      // 25 minutes to 16:40 minutes
      for (let i = 0; i < 500; i++) {
        fn()
      }
      expect(ms).toEqual(1000)
    })
    const clearInterval = jest.spyOn(window, 'clearInterval')
    const t = new Timer().add(25, 'minutes')
    t.startTimer()
    expect(t.format).toEqual('16:40')
    t.stopTimer()
    expect(t.format).toEqual('25:00')
    expect(clearInterval).toHaveBeenCalled()
  })
})