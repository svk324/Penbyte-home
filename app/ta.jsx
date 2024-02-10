import Link from 'next/link';
import subjectsData from '/app/data.json';

const calculateLastUpdate = (lu) => {
  const luDate = new Date(lu);
  const currentDate = new Date();
  const differenceInMilliseconds = currentDate - luDate;
  const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
  
  if (differenceInDays === 1) {
    return 'One day ago';
  } else if (differenceInDays <= 7) {
    return 'One week ago';
  } else if (differenceInDays <= 15) {
    return '15 Days ago';
  } else if (differenceInDays <= 30) {
    return '1 month ago';
  }  else if (differenceInDays <= 60) {
    return '2 months ago';
  } else if (differenceInDays <= 90) {
    return '3 months ago';
  } else if (differenceInDays <= 180) {
    return '6 months ago';
  } else {
    return 'More than 6 months ago';
  }
};

const Page = () => {
  return (
    <div>
      <h2>E1-Sem-1 :</h2>
      <table>
        <thead>
          <tr>
            <th>Subject Name</th>
            <th>Status</th>
            <th>Author</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {subjectsData.subjects.map(subject => (
            <tr key={subject.subjectName}>
              <td><a href={subject.link}>{subject.subjectName}</a></td>
              <td>{subject.link.trim() !== "" ? "Available" : "Unavailable"}</td>
              
              <td>{subject.author}</td>
              <td>{calculateLastUpdate(subject.lu)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Page;
