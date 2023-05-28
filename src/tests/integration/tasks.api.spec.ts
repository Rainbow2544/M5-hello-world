import { Server } from 'http'
import request from 'supertest'
import app from '../../app'

describe('Tasks API', () => {
  test('it should return all tasks', async () => {
    //arrange
    const expected = [
      {
        id: 1,
        name: 'Mission 01',
        description: 'Chatbot',
        isCompleted: false,
      },
    ]

    //Act
    const res = await request(app).get('/api/tasks')

    //Assert
    expect(res.status).toEqual(200)
    expect(res.body).toEqual(expected)
  })
})
