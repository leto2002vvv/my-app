import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployeesAddForm from '../employers-add-form/employers-add-form';

import './app.css';

function App() {

    const data = [
        {name: 'Viktor', salary:'300', increase: false},
        {name: 'Sasha', salary:'300', increase: true},
        {name: 'Oleg', salary:'3300', increase: false},
    ]

    return (
        <div className='app'>
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployersList data={data}/>
            <EmployeesAddForm/>

        </div>
    )
}   

export default App