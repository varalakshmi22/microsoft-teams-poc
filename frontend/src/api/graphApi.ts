
const getTeamsToken =async() =>{
    return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IndoMDZzRWt6TEhKNXNOTmFVeVJZMl82TzhLMCIsImtpZCI6IndoMDZzRWt6TEhKNXNOTmFVeVJZMl82TzhLMCJ9.eyJhdWQiOiJhcGk6Ly9taWNyb3NvZnQtdGVhbXMtcG9jLnZlcmNlbC5hcHAvMmFiYzg0NWMtMTVmYy00MTRmLWIzMTktZTdkYTM3ZTliNTYzIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMDU0MGI2OWEtN2ZmOC00OTdlLWE5OWMtMDQ1MjQzYzJiMjY5LyIsImlhdCI6MTc4MTU5MDAzOCwibmJmIjoxNzgxNTkwMDM4LCJleHAiOjE3ODE1OTg2NDAsImFjciI6IjEiLCJhaW8iOiJBWFFBaS84Y0FBQUExdTZSbHZYOTI1YXRVdjhmT0ZZWTZGQ240UjNVaFYxRTlTL2MraXVmaEVCUTJmbmpqMjVreGl4d00zMGd4ZWZPTGVyaTNnVlM1UlVJaFJOeWY3aEFUa05CZTJhUU1VQjBqbWdoTm5vWm1Ub0Q1Y0hJSDdBNXdWV1BKV0wvbU9YL0hOM0hBdTNnNk5BREdUeEhjSVhpUXc9PSIsImFtciI6WyJwd2QiLCJyc2EiLCJtZmEiXSwiYXBwaWQiOiI1ZTNjZTZjMC0yYjFmLTQyODUtOGQ0Yi03NWVlNzg3ODczNDYiLCJhcHBpZGFjciI6IjAiLCJkZXZpY2VpZCI6IjdjNzdiOGNmLWI1MWYtNDVjNy05YjdmLTM1MjJiOGFlYzlkOSIsImZhbWlseV9uYW1lIjoiVmFyYWxha3NobWkiLCJnaXZlbl9uYW1lIjoiTXVsaWtpIiwiaXBhZGRyIjoiMTU1LjE5MC42LjE5IiwibmFtZSI6Ik11bGlraSBWYXJhbGFrc2htaSIsIm9pZCI6IjM3MTVkNDNjLWI0NGUtNDMxNy1iMWJmLTU2MTIwZjFjZjIxNyIsInJoIjoiMS5BY1lBbXJaQUJmaF9ma21wbkFSU1E4S3lhVnlFdkNyOEZVOUJzeG5uMmpmcHRXTUFBQ3pHQUEuIiwic2NwIjoiU1NPIiwic2lkIjoiMDA1MGJmZmEtZTZmOS1jZGJjLTE0ZmItMWM0NTY0NWM1ODQ1Iiwic3ViIjoiWDBLZk1XZkVROUI3RkJIdm1UZFJIeGF2UlQ3QkZqd0ZabHEtQ2QtbmtoVSIsInRpZCI6IjA1NDBiNjlhLTdmZjgtNDk3ZS1hOTljLTA0NTI0M2MyYjI2OSIsInVuaXF1ZV9uYW1lIjoidm11bGlraUBhemlyby5jb20iLCJ1cG4iOiJ2bXVsaWtpQGF6aXJvLmNvbSIsInV0aSI6IjRwQzBjSksxTzBlMHQ3VmljSXhqQUEiLCJ2ZXIiOiIxLjAiLCJ4bXNfZnRkIjoiNXYxbXFVa2YtTGFKTTh1dXp0VEh2RkN6S1lVdDdQTEl4ODFFTFhzeWlYY0JZWE5wWVhOdmRYUm9aV0Z6ZEMxa2MyMXoifQ.faBx4bL1Pz4K5yKE4DHMW9KvX37K8c4O8GfqbL8cgFk9fkAj6Y4jt5_t9YgXVb0N0M0z7aXaKiOqqXn0VQTtInhIBt4LkQbnpYmHiFbK3j6e60NRyTDAyr0VDfrszRDJkfQ0zQcOBQM6KR2R8x-DoXkchJCnUj231GaNAKip5LibVCz6vNXk-tddcQCEWEOJMUYT-Y4DhWWsJtT5qpEDY1Pp73HJ88JVOrjkJ4bL2FOIkasUEMB_pjmOvPimwb9h8glOagcy0ZgTzPnXHKV3zwofxOKVMiW3fOOo7Sn6-TUEwYbRtTnYguViH3QrtUaIGggmMzv09Z-JmGlGRn_9Tg';
}
// const API_BASE = 'https://teams-poc-api.vercel.app/api';
 const API_BASE ='http://localhost:5000/api';
export const getProfile = async () => {
    const token =
        await getTeamsToken();
    console.log("Response status in getEmails:", token);

    const response = await fetch(
        `${API_BASE}/profile`,
        {
            method: 'POST',
            headers: {
                'Content-Type': `application/json`,
            },
            body: JSON.stringify({ token }),
        }
    );
    console.log("Response status in getEmails:", response);
    return response.json();
};

export const getCalendarEvents =
    async () => {
        const token =
            await getTeamsToken();
        console.log("Token in getCalendarEvents:", token);
        const response = await fetch(
            `${API_BASE}/events`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': `application/json`,
                },
                body: JSON.stringify({ token }),
            }
        );
        console.log("Response status in getEmails:", response);
        return response.json();
    };

export const getEmails = async () => {
    const token =
        await getTeamsToken();
    console.log("Response status in getEmails:", token);

    const response = await fetch(
        `${API_BASE}/emails`,
        {
            method: 'POST',
            headers: {
                'Content-Type': `application/json`,
            },
            body: JSON.stringify({ token }),
        }
    );
    console.log("Response status in getEmails:", response);
    return response.json();
};