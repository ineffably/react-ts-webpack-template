
export const fetchMock = ({ json = {}, status = 200 }) => (
  jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => json,
      status,
      debug: { json, status }
    }) as any,
  )
)


