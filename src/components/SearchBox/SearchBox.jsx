import css from './SearchBox.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';

export default function SearchBox() {

    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    const handleFilter = (filter) => {
        dispatch(changeFilter(filter));
    }

    return (
        <div className={css.box}>
            <p className={css.text}>Find contacts by name:</p>
            <input type="text" name="filter" value={filter} onChange={evt => handleFilter(evt.target.value)} />
        </div>
    )
} 