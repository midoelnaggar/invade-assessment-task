
import { mockResponse } from '../../__mocks__/axios';
import { getUniversitiesThunk } from './thunks/universitiesThunks';
import axios from 'axios';

jest.mock('axios');

describe('fetchData', () => {
  it('fetches data successfully', async () => {
    const dispatch = jest.fn();
    (axios.get as jest.Mock).mockResolvedValueOnce({ mockResponse });

    await dispatch(getUniversitiesThunk());

    expect(dispatch).toHaveBeenCalledWith({
      type: 'FETCH_SUCCESS',
      payload: mockResponse,
    });
  });

  it('handles errors', async () => {
    const dispatch = jest.fn();
    const error = new Error('Request failed');
    (axios.get as jest.Mock).mockRejectedValueOnce(error);

    await dispatch(getUniversitiesThunk());

    expect(dispatch).toHaveBeenCalledWith({
      type: 'FETCH_ERROR',
      payload: error,
    });
  });
});
