import {Link} from 'react-router-dom';

const JobIndexItem = (props) => {
    return <Link to={`/jobs/${props.job.id}`}><li className="job-item">{props.job.title}</li></Link>
}

export default JobIndexItem;