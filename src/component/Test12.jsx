import React from 'react'

export default function Test12() {
  return (
    <>
        <div className="container mt-3 mb-3">
            <h4 className='text-center text-danger bg-light p-2 rounded' style={{fontWeight:'bold'}}>Class - 12 Test</h4>
            <table className='mytable'>
                <tbody>
                    <tr>
                        <th>Subject</th>
                        <th>Topic Name</th>
                        <th>Date</th>
                        <th>Test Link</th>
                    </tr>
                    <tr>
                        <td>Biology</td>
                        <td>जीवों में जनन</td>
                        <td>20/02/2023</td>
                        <td><a href="biotest1" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>Take Test</a></td>
                    </tr>
                    <tr>
                        <td>English</td>
                        <td>Tense</td>
                        <td>20/02/2023</td>
                        <td><a href="biotest1" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>Take Test</a></td>
                    </tr>
                    <tr>
                        <td>Mathematics</td>
                        <td>Algerba</td>
                        <td>20/02/2023</td>
                        <td><a href="biotest1" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>Take Test</a></td>
                    </tr>
                    <tr>
                        <td>Hindi</td>
                        <td>Muhavare</td>
                        <td>20/02/2023</td>
                        <td><a href="biotest1" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>Take Test</a></td>
                    </tr>
                    <tr>
                        <td>Physics</td>
                        <td>Light</td>
                        <td>20/02/2023</td>
                        <td><a href="biotest1" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>Take Test</a></td>
                    </tr>
                    <tr>
                        <td>Chemistry</td>
                        <td>Organic</td>
                        <td>20/02/2023</td>
                        <td><a href="biotest1" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>Take Test</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
  )
}
