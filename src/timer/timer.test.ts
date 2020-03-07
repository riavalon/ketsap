import Timer from './timer'

describe('timer', () => {

  it('should allow you to add time to the totalTime', () => {
    const t = new Timer().add(25, 'minutes')
    expect(t.timeRemaining).toEqual((25*60))
  })

  it('should allow you to start the timer and decrement time remaining by one every 1000 ms', () => {
    jest.spyOn(window, 'setInterval')
    const t = new Timer().add(25, 'minutes')
    t.startTimer()

    expect(setInterval).toHaveBeenCalled()
  })

  it('should set isTimeUp to true if timeRemaining hits zero', () => {
    jest.spyOn(window, 'setInterval').mockImplementation((fn) => {
      for (let i = 0; i < 5; i++) {
        fn()
      }
    })
    const t = new Timer().add(5, 'seconds')
    expect(t.isTimeUp).toBeFalsy()
    t.startTimer()
    expect(t.isTimeUp).toBeTruthy()
  })
})