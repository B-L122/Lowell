const tournamentData = [
    { year: "1923", name: "Marshall Forrest", club: "Long Meadow Golf Club", score: "237", team: "No Team Award Given" },
    { year: "1924", name: "Arnold Howard", club: "Mount Pleasant Golf Club", score: "230", team: "Vesper Country Club" },
    { year: "1925", name: "Chick Grasse", club: "Mount Pleasant Golf Club", score: "233", team: "Vesper Country Club" },
    { year: "1926", name: "Chick Grasse", club: "Mount Pleasant Golf Club", score: "233", team: "Vesper Country Club" },
    { year: "1927", name: "Charles Stover", club: "Vesper Country Club", score: "223", team: "Vesper Country Club" },
    { year: "1928", name: "Chick Grasse", club: "Mount Pleasant Golf Club", score: "230", team: "Vesper Country Club" },
    { year: "1929", name: "Jack Healey Jr", club: "Long Meadow Golf Club", score: "237", team: "Vesper Country Club" },
    { year: "1930", name: "Chick Grasse", club: "Mount Pleasant Golf Club", score: "226", team: "Vesper Country Club" },
    { year: "1931", name: "Chick Grasse", club: "Mount Pleasant Golf Club", score: "227", team: "Vesper Country Club" },
    { year: "1932", name: "Chick Grasse", club: "Mount Pleasant Golf Club", score: "234", team: "Vesper Country Club" },
    { year: "1933", name: "Jack Healey Jr", club: "Long Meadow Golf Club", score: "229", team: "Long Meadow Golf Club" },
    { year: "1934", name: "Ray Gilmore", club: "Long Meadow Golf Club", score: "237", team: "Long Meadow Golf Club" },
    { year: "1935", name: "Tom Burke", club: "Long Meadow Golf Club", score: "233", team: "Vesper Country Club" },
    { year: "1936", name: "Bill Healey", club: "Long Meadow Golf Club", score: "227", team: "Long Meadow Golf Club" },
    { year: "1937", name: "Phil Payton", club: "Vesper Country Club", score: "232", team: "Long Meadow Golf Club" },
    { year: "1938", name: "Tom Burke", club: "Long Meadow Golf Club", score: "224", team: "Long Meadow Golf Club" },
    { year: "1939", name: "Tom Burke", club: "Long Meadow Golf Club", score: "222", team: "Long Meadow Golf Club" },
    { year: "1940", name: "Ted Tabor", club: "Vesper Country Club", score: "224", team: "Long Meadow Golf Club" },
    { year: "1941", name: "Ted Tabor", club: "Vesper Country Club", score: "223", team: "Long Meadow Golf Club" },
    { year: "1942", name: "Ray Gilmore", club: "Long Meadow Golf Club", score: "227", team: "Mount Pleasant Golf Club" },
    { year: "1943", name: " ", club: "Canceled due to World War II", score: "", team: "Canceled due to World War II" },
    { year: "1944", name: " ", club: "Canceled due to World War II", score: "", team: "Canceled due to World War II" },
    { year: "1945", name: " ", club: "Canceled due to World War II", score: "", team: "Canceled due to World War II" },
    { year: "1946", name: "Tom Burke", club: "Long Meadow Golf Club", score: "226", team: "Long Meadow Golf Club" },
    { year: "1947", name: "Ted Tabor", club: "Vesper Country Club", score: "224", team: "Vesper Country Club" },
    { year: "1948", name: "Leo Clough", club: "Vesper Country Club", score: "224", team: "Vesper Country Club" },
    { year: "1949", name: "Dick Harris", club: "Long Meadow Golf Club", score: "224", team: "Vesper Country Club" },
    { year: "1950", name: "Dick Harris", club: "Long Meadow Golf Club", score: "217", team: "Vesper Country Club" },
    { year: "1951", name: "Chick Grasse", club: "Vesper Country Club", score: "217", team: "Vesper Country Club" },
    { year: "1952", name: "Chick Grasse", club: "Vesper Country Club", score: "224", team: "Vesper Country Club" },
    { year: "1953", name: "Jack King", club: "Vesper Country Club", score: "219", team: "Vesper Country Club" },
    { year: "1954", name: "Chick Grasse", club: "Vesper Country Club", score: "221", team: "Vesper Country Club" },
    { year: "1955", name: "Dick Harris", club: "Long Meadow Golf Club", score: "224", team: "Long Meadow Golf Club" },
    { year: "1956", name: "Dick Harris", club: "Long Meadow Golf Club", score: "228", team: "Long Meadow Golf Club" },
    { year: "1957", name: "Stan Koslowski", club: "Long Meadow Golf Club", score: "222", team: "Long Meadow Golf Club" },
    { year: "1958", name: "Frank Polak", club: "Long Meadow Golf Club", score: "229", team: "Long Meadow Golf Club" },
    { year: "1959", name: "Jack King", club: "Vesper Country Club", score: "225", team: "Vesper Country Club" },
    { year: "1960", name: "Larry Martin", club: "Long Meadow Golf Club", score: "230", team: "Long Meadow Golf Club" },
    { year: "1961", name: "Tom Mulligan", club: "Mount Pleasant Golf Club", score: "223", team: "Long Meadow Golf Club" },
    { year: "1962", name: "Dick Drury", club: "Vesper Country Club", score: "224", team: "Long Meadow Golf Club" },
    { year: "1963", name: "Larry Martin", club: "Long Meadow Golf Club", score: "230", team: "Mount Pleasant Golf Club" },
    { year: "1964", name: "Bill Carroll Jr", club: "Long Meadow Golf Club", score: "226", team: "Mount Pleasant Golf Club" },
    { year: "1965", name: "Tom McGuirk", club: "Mount Pleasant Golf Club", score: "226", team: "Mount Pleasant Golf Club" },
    { year: "1966", name: "Tom McGuirk", club: "Mount Pleasant Golf Club", score: "224", team: "Mount Pleasant Golf Club" },
    { year: "1967", name: "Mike Buja", club: "Long Meadow Golf Club", score: "219", team: "Long Meadow Golf Club" },
    { year: "1968", name: "Steve Conrad", club: "Nabnasset Lake Country Club", score: "228", team: "Nabnasset Lake Country Club" },
    { year: "1969", name: "Mike Buja", club: "Long Meadow Golf Club", score: "218", team: "Long Meadow Golf Club" },
    { year: "1970", name: "Mike Buja", club: "Long Meadow Golf Club", score: "223", team: "Long Meadow Golf Club" },
    { year: "1971", name: "Mike Buja", club: "Long Meadow Golf Club", score: "220", team: "Mount Pleasant Golf Club" },
    { year: "1972", name: "Larry Martin", club: "Vesper Country Club", score: "223", team: "Vesper Country Club" },
    { year: "1973", name: "Joe Miller", club: "Long Meadow Golf Club", score: "220", team: "Long Meadow Golf Club" },
    { year: "1974", name: "Jack Courtney", club: "Long Meadow Golf Club", score: "227", team: "Vesper Country Club" },
    { year: "1975", name: "Joe Miller", club: "Long Meadow Golf Club", score: "221", team: "Nabnasset Lake Country Club" },
    { year: "1976", name: "Larry Martin", club: "Vesper Country Club", score: "225", team: "Vesper Country Club" },
    { year: "1977", name: "Dave Lane", club: "Nabnasset Lake Country Club", score: "224", team: "Nabnasset Lake Country Club" },
    { year: "1978", name: "Doug Parigian", club: "Long Meadow Golf Club", score: "224", team: "Vesper Country Club" },
    { year: "1979", name: "Larry Martin", club: "Vesper Country Club", score: "220", team: "Vesper Country Club" },
    { year: "1980", name: "Mark Demaras", club: "Long Meadow Golf Club", score: "226", team: "Vesper Country Club" },
    { year: "1981", name: "Mark Demaras", club: "Long Meadow Golf Club", score: "217", team: "Long Meadow Golf Club" },
    { year: "1982", name: "Mark Demaras", club: "Long Meadow Golf Club", score: "222", team: "Mount Pleasant Golf Club" },
    { year: "1983", name: "Doug Parigian", club: "Long Meadow Golf Club", score: "222", team: "Nabnasset Lake Country Club" },
    { year: "1984", name: "Larry Martin", club: "Vesper Country Club", score: "220", team: "Nabnasset Lake Country Club" },
    { year: "1985", name: "Gene Manley", club: "Long Meadow Golf Club", score: "222", team: "Long Meadow Golf Club" },
    { year: "1986", name: "Al Santos", club: "Mount Pleasant Golf Club", score: "223", team: "Mount Pleasant Golf Club" },
    { year: "1987", name: "Al Santos", club: "Mount Pleasant Golf Club", score: "217", team: "Long Meadow Golf Club" },
    { year: "1988", name: "Ken Hughes", club: "Vesper Country Club", score: "221", team: "Long Meadow Golf Club & Mount Pleasant Golf Club" },
    { year: "1989", name: "Gene Manley", club: "Long Meadow Golf Club", score: "223", team: "Mount Pleasant Golf Club" },
    { year: "1990", name: "Doug Parigian", club: "Long Meadow Golf Club", score: "224", team: "Vesper Country Club" },
    { year: "1991", name: "Gene Manley", club: "Long Meadow Golf Club", score: "218", team: "Vesper Country Club" },
    { year: "1992", name: "Doug Parigian", club: "Long Meadow Golf Club", score: "224", team: "Vesper Country Club" },
    { year: "1993", name: "John Dixon", club: "Vesper Country Club", score: "222", team: "Vesper Country Club" },
    { year: "1994", name: "Phil Smith", club: "Vesper Country Club", score: "213", team: "Nabnasset Lake Country Club" },
    { year: "1995", name: "Doug Parigian", club: "Long Meadow Golf Club", score: "220", team: "Long Meadow Golf Club" },
    { year: "1996", name: "Doug Parigian", club: "Long Meadow Golf Club", score: "216", team: "Nabnasset Lake Country Club" },
    { year: "1997", name: "Doug Parigian", club: "Long Meadow Golf Club", score: "216", team: "Long Meadow Golf Club" },
    { year: "1998", name: "Doug Parigian", club: "Long Meadow Golf Club", score: "218", team: "Long Meadow Golf Club" },
    { year: "1999", name: "Doug Parigian", club: "Long Meadow Golf Club", score: "216", team: "Long Meadow Golf Club" },
    { year: "2000", name: "Marc Chandonnet", club: "Long Meadow Golf Club", score: "220", team: "Long Meadow Golf Club" },
    { year: "2001", name: "Marc Chandonnet", club: "Long Meadow Golf Club", score: "220", team: "Mount Pleasant Golf Club" },
    { year: "2002", name: "Dave Poehler", club: "Nabnasset Lake Country Club", score: "223", team: "Vesper Country Club" },
    { year: "2003", name: "Doug Parigian", club: "Long Meadow Golf Club", score: "208", team: "Long Meadow Golf Club" },
    { year: "2004", name: "Dan Brown", club: "Vesper Country Club", score: "218", team: "Vesper Country Club" },
    { year: "2005", name: "Ken Gys", club: "Mount Pleasant Golf Club", score: "223", team: "Vesper Country Club" },
    { year: "2006", name: "Phil Smith", club: "Vesper Country Club", score: "212", team: "Vesper Country Club" },
    { year: "2007", name: "Phil Smith", club: "Vesper Country Club", score: "217", team: "Vesper Country Club" },
    { year: "2008", name: "Phil Smith", club: "Vesper Country Club", score: "213", team: "Vesper Country Club" },
    { year: "2009", name: "Phil Smith", club: "Vesper Country Club", score: "215", team: "Vesper Country Club" },
    { year: "2010", name: "Phil Smith", club: "Vesper Country Club", score: "210", team: "Vesper Country Club" },
    { year: "2011", name: "Phil Smith", club: "Vesper Country Club", score: "216", team: "Vesper Country Club" },
    { year: "2012", name: "Phil Smith", club: "Vesper Country Club", score: "212", team: "Vesper Country Club" },
    { year: "2013", name: "Shawn Scott", club: "Long Meadow Golf Club", score: "216", team: "Vesper Country Club" },
    { year: "2014", name: "George Popp", club: "Vesper Country Club", score: "221", team: "Vesper Country Club" },
    { year: "2015", name: "Chris Gentle", club: "Mount Pleasant Golf Club", score: "212", team: "Vesper Country Club" },
    { year: "2016", name: "Chris Gentle", club: "Mount Pleasant Golf Club", score: "210", team: "Vesper Country Club" },
    { year: "2017", name: "Rich Campiola", club: "Vesper Country Club", score: "216", team: "Vesper Country Club" },
    { year: "2018", name: "Rich Campiola", club: "Vesper Country Club", score: "218", team: "Vesper Country Club" },
    { year: "2019", name: "John DeVito", club: "Vesper Country Club", score: "215", team: "Vesper Country Club" },
    { year: "2020", name: "Cameron Sheedy", club: "Vesper Country Club", score: "213", team: "Vesper Country Club" },
    { year: "2021", name: "Brandon Gillis", club: "Nabnasset Lake Country Club", score: "218", team: "Vesper Country Club" },
    { year: "2022", name: "Chris Herrick", club: "Nabnasset Lake", score: "220", team: "Vesper Country Club" },
    { year: "2023", name: "Brandon Gillis", club: "Nabnasset Lake", score: "208", team: "Mount Pleasant Golf Club" },
    { year: "2024", name: "Trevor Drew", club: "Long Meadow Golf Club", score: "215", team: "Vesper Country Club" },
    { year: "2025", name: "Trevor Drew", club: "Long Meadow Golf Club", score: "205", team: "Long Meadow Golf Club" },
    { year: "2026", name: "Chris Gentle", club: "Mount Pleasant Golf Club", score: "215", team: "Long Meadow Golf Club" }

];


let filteredData = [...tournamentData];
let sortCol = 'year';
let sortDir = 1;

const tableBody = document.getElementById('tableBody');
const resultCount = document.getElementById('resultCount');
const teamSelect = document.getElementById('teamSearch');

function populateTeams() {
    const teams = [...new Set(tournamentData.map(d => d.team))].sort();
    teams.forEach(t => {
        if (t.trim() && t !== "Canceled due to World War II") {
            const opt = document.createElement('option');
            opt.value = t; opt.textContent = t;
            teamSelect.appendChild(opt);
        }
    });
}

function render() {
    const yVal = document.getElementById('yearSearch').value.toLowerCase();
    const nVal = document.getElementById('nameSearch').value.toLowerCase();
    const tVal = teamSelect.value.toLowerCase();

    filteredData = tournamentData.filter(d => {
        return (d.year || "").toLowerCase().includes(yVal) && 
               (d.name || "").toLowerCase().includes(nVal) && 
               (tVal === "" || (d.team || "").toLowerCase() === tVal);
    });

    filteredData.sort((a, b) => {
        let valA = a[sortCol], valB = b[sortCol];
        if (!isNaN(valA) && valA !== "") { valA = Number(valA); valB = Number(valB); }
        if (valA === valB) return 0;
        return valA > valB ? (1 * sortDir) : (-1 * sortDir);
    });

    tableBody.innerHTML = filteredData.length ? filteredData.map(d => `
        <tr><td>${d.year}</td><td>${d.name}</td><td>${d.club}</td><td>${d.score}</td><td>${d.team}</td></tr>
    `).join('') : '<tr><td colspan="5" class="no-results">No records found.</td></tr>';
    
    resultCount.textContent = `Showing ${filteredData.length} results`;
}

function handleSort(col) {
    if (sortCol === col) sortDir *= -1;
    else { sortCol = col; sortDir = 1; }
    document.querySelectorAll('th').forEach(th => th.className = '');
    document.getElementById(`th-${col}`).className = sortDir === 1 ? 'sort-asc' : 'sort-desc';
    render();
}

function clearFilters() {
    document.getElementById('yearSearch').value = '';
    document.getElementById('nameSearch').value = '';
    teamSelect.value = '';
    render();
}

function exportToCSV() {
    const headers = "Year,Name,Club,Score,Team Champion\n";
    const csvContent = filteredData.map(d => 
        `${d.year},"${d.name}","${d.club}",${d.score},"${d.team}"`
    ).join("\n");
    const blob = new Blob([headers + csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'Lowell_Golf_Champions.csv';
    a.click();
}

document.querySelectorAll('input, select').forEach(el => el.addEventListener('input', render));
populateTeams();
render();