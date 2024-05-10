import {useParams, Link} from 'react-router-dom';

const JobShow = (props) => {
    const { jobId } = useParams();  // { jobId: '1' }
    const job = props.jobData[jobId];

    return (
        <div className='job-show'>
            <h2>Job Show</h2>
            <h3>{job.title}: ${job.salary}</h3>
            <ul>
                <li>PTO: {job.pto}</li>
                <li>Saved: {job.saved ? '✅' : '❌'}</li>
                <li>Applied: {job.applied ? '✅' : '❌'}</li>
            </ul>

            <Link to={'./jobs'}>Home</Link>

        </div>
    )
}

export default JobShow;