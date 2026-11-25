
import Counter from "./components/Counter";
import StudentList from "./components/StudentList";
import StudentSearch from "./components/StudentSearch";
import useStudents from "./hooks/useStudents";

function App() {

    const {
        filteredStudents,
        search,
        setSearch,
        handleDelete
    } = useStudents();

    return (
        <div className="p-6">

            <h1>React Performance Example</h1>

            <Counter />

            <StudentSearch
                search={search}
                setSearch={setSearch}
            />

            <StudentList
                students={filteredStudents}
                onDelete={handleDelete}
            />

        </div>
    );
}

export default App;
