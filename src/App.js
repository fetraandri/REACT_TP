import './App.css';
import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';

function NewTable (){
    const [ datatable, setDataTable] = React.useState({
        columns:[
            {
                label: 'Name',
                field: 'name',
                width: 150,
                attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Name',
                },
            },
            {
                label: 'Position',
                field: 'position',
            },
            {
                label: 'Office',
                field: 'office',
            },
            {
                label: 'Age',
                field: 'age',
                sort: 'asc',
            },
            {
                label: 'Start date',
                field: 'date',
                sort: 'disabled',
            },
            {
                label: 'Salary',
                field: 'salary',
                sort: 'disabled',
            },
        ],

        rows: [
            {
                'name': 'Tiger Nixon',
                'position': 'System Architect',
                'office': 'Edinburgh',
                'age': 61,
                'date': '2011/04/25	',
                'salary': '$320,800',
            },
            {
                'name': 'Garrett Winters',
                'position': 'Accountant',
                'office': 'Tokyo',
                'age': 63,
                'date': '2011/07/25',
                'salary': '$170,750',
            },
            {
                'name': 'Ashton Cox',
                'position': 'Junior Technical Author',
                'office': 'San Francisco',
                'age': 66,
                'date': '2009/01/12',
                'salary': '$86,000',
            },
            {
                'name': 'Cedric Kelly',
                'position': 'Senior Javascript Developer',
                'office': 'Edinburgh',
                'age': 22,
                'date': '2012/03/29',
                'salary': '$433,060',
            },
            {
                'name': 'Airi Satou',
                'position': 'Accountant',
                'office': 'Tokyo',
                'age': 33,
                'date': '2008/11/28',
                'salary': '$162,700',
            },
            {
                'name': 'Brielle Williamson',
                'position': 'Integration Specialist',
                'office': 'New York',
                'age': 61,
                'date': '2012/12/02',
                'salary': '$372,000',
            },
            {
                'name': 'Herrod Chandler',
                'position': 'Sales Assistant',
                'office': 'San Francisco	',
                'age': 59,
                'date': '2012/08/06',
                'salary': '$137,500',
            },
            {
                'name': 'Rhona Davidson',
                'position': 'Integration Specialist',
                'office': 'Tokyo',
                'age': 55,
                'date': '2010/10/14',
                'salary': '$327,900',
            },
            {
                'name': 'Colleen Hurst',
                'position': 'Javascript Developer',
                'office': 'San Francisco	',
                'age': 39,
                'date': '2009/09/15',
                'salary': '$205,500',
            },
            {
                'name': 'Sonya Frost',
                'position': 'Software Engineer',
                'office': 'Edinburgh',
                'age': 23,
                'date': '2008/12/13',
                'salary': '$103,600',
            },
            {
                'name': 'Jena Gaines',
                'position': 'Office Manager',
                'office': 'London',
                'age': 30,
                'date': '2008/12/19',
                'salary': '$90,560',
            },
            {
                'name': 'Quinn Flynn',
                'position': 'Support Lead',
                'office': 'Edinburgh',
                'age': 22,
                'date': '2013/03/03	',
                'salary': '$342,000',
            },
            {
                'name': 'Charde Marshall',
                'position': 'Regional Director',
                'office': 'San Francisco	',
                'age': 36,
                'date': '2008/10/16',
                'salary': '$470,600',
            },
            {
                'name': 'Haley Kennedy',
                'position': 'Senior Marketing Designer',
                'office': 'London',
                'age': 43,
                'date': '2012/12/18',
                'salary': '$313,500',
            },
            {
                'name': 'Tatyana Fitzpatrick',
                'position': 'Regional Director',
                'office': 'London',
                'age': 19,
                'date': '2010/03/17',
                'salary': '$385,750',
            },
            {
                'name': 'Michael Silva',
                'position': 'Marketing Designer',
                'office': 'London',
                'age': 66,
                'date': '2012/11/27',
                'salary': '$198,500',
            },
            {
                'name': 'Paul Byrd',
                'position': 'Chief Financial Officer (CFO)',
                'office': 'New York',
                'age': 64,
                'date': '2010/06/09',
                'salary': '$725,000',
            },
            {
                'name': 'Gloria Little',
                'position': 'Systems Administrator',
                'office': 'New York',
                'age': 59,
                'date': '2009/04/10',
                'salary': '$237,500',
            },
            {
                'name': 'Bradley Greer',
                'position': 'Software Engineer',
                'office': 'London',
                'age': 41,
                'date': '2012/10/13',
                'salary': '$132,000',
            },
            {
                'name': 'Dai Rios',
                'position': 'Personnel Lead',
                'office': 'Edinburgh',
                'age': 35,
                'date': '2012/09/26',
                'salary': '$217,500',
            },
            {
                'name': 'Gloria Little',
                'position': 'Systems Administrator',
                'office': 'New York',
                'age': 59,
                'date': '2009/04/10',
                'salary': '$237,500',
            },
            {
                'name': 'Bradley Greer',
                'position': 'Software Engineer',
                'office': 'London',
                'age': 41,
                'date': '2012/10/13',
                'salary': '$132,000',
            },
            {
                'name': 'Dai Rios',
                'position': 'Personnel Lead',
                'office': 'Edinburgh',
                'age': 35,
                'date': '2012/09/26',
                'salary': '$217,500',
            },
            {
                'name': 'Jenette Caldwell',
                'position': 'Development Lead',
                'office': 'New York',
                'age': 30,
                'date': '2011/09/03',
                'salary': '$345,000',
            },
            {
                'name': 'Yuri Berry',
                'position': 'Chief Marketing Officer (CMO)',
                'office': 'New York',
                'age': 40,
                'date': '2009/06/25',
                'salary': '$675,000',
            },
            {
                'name': 'Caesar Vance',
                'position': 'Pre-Sales Support',
                'office': 'New York',
                'age': 21,
                'date': '2011/12/12',
                'salary': '$106,450',
            },
            {
                'name': 'Doris Wilder',
                'position': 'Sales Assistant',
                'office': 'Sidney',
                'age': 23,
                'date': '2010/09/20',
                'salary': '$85,600',
            },
            {
                'name': 'Angelica Ramos',
                'position': 'Chief Executive Officer (CEO)',
                'office': 'London',
                'age': 47,
                'date': '2009/10/09',
                'salary': '$1,200,000',
            },
            {
                'name': 'Gavin Joyce',
                'position': 'Developer',
                'office': 'Edinburgh',
                'age': 42,
                'date': '2010/12/22',
                'salary': '$92,575',
            },
            {
                'name': 'Jennifer Chang',
                'position': 'Regional Director',
                'office': 'Singapore',
                'age': 28,
                'date': '2010/11/14',
                'salary': '$357,650',
            },
            {
                'name': 'Brenden Wagner',
                'position': 'Software Engineer',
                'office': 'San Francisco',
                'age': 28,
                'date': '2011/06/07',
                'salary': '$206,850',
            },
            {
                'name': 'Fiona Green',
                'position': 'Chief Operating Officer (COO)',
                'office': 'San Francisco',
                'age': 48,
                'date': '2010/03/11',
                'salary': '$850,000',
            },
            {
                'name': 'Shou Itou',
                'position': 'Regional Marketing',
                'office': 'Tokyo',
                'age': 20,
                'date': '2011/08/14',
                'salary': '$163,000',
            },
            {
                'name': 'Michelle House',
                'position': 'Integration Specialist',
                'office': 'Sidney',
                'age': 37,
                'date': '2011/06/02',
                'salary': '$95,400',
            },
            {
                'name': 'Suki Burks',
                'position': 'Developer',
                'office': 'London',
                'age': 53,
                'date': '2009/10/22',
                'salary': '$114,500',
            },
            {
                'name': 'Prescott Bartlett',
                'position': 'Technical Author',
                'office': 'London',
                'age': 27,
                'date': '2011/05/07',
                'salary': '$145,000',
            },
            {
                'name': 'Gavin Cortez',
                'position': 'Team Leader',
                'office': 'San Francisco',
                'age': 22,
                'date': '2008/10/26',
                'salary': '$235,500',
            },
            {
                'name': 'Martena Mccray',
                'position': 'Post-Sales support',
                'office': 'Edinburgh',
                'age': 46,
                'date': '2011/03/09',
                'salary': '$324,050',
            },
            {
                'name': 'Unity Butler',
                'position': 'Marketing Designer',
                'office': 'San Francisco',
                'age': 47,
                'date': '2009/12/09',
                'salary': '$85,675',
            },
            {
                'name': 'Howard Hatfield',
                'position': 'Office Manager',
                'office': 'San Francisco',
                'age': 51,
                'date': '2008/12/16',
                'salary': '$164,500',
            },
            {
                'name': 'Hope Fuentes',
                'position': 'Secretary',
                'office': 'San Francisco',
                'age': 41,
                'date': '2010/02/12',
                'salary': '$109,850',
            },
            {
                'name': 'Vivian Harrell',
                'position': 'Financial Controller',
                'office': 'San Francisco',
                'age': 62,
                'date': '2009/02/14',
                'salary': '$452,500',
            },
            {
                'name': 'Timothy Mooney	',
                'position': 'Office Manager',
                'office': 'London',
                'age': 37,
                'date': '2008/12/11',
                'salary': '$136,200',
            },
            {
                'name': 'Jackson Bradshaw',
                'position': 'Director',
                'office': 'New York',
                'age': 65,
                'date': '2008/09/26',
                'salary': '$645,750',
            },
            {
                'name': 'Olivia Liang',
                'position': 'Support Engineer',
                'office': 'Singapore',
                'age': 64,
                'date': '2011/02/03',
                'salary': '$234,500',
            },
            {
                'name': 'Bruno Nash',
                'position': 'Software Engineer',
                'office': 'London',
                'age': 38,
                'date': '2011/05/03',
                'salary': '$163,500',
            },
            {
                'name': 'Sakura Yamamoto',
                'position': 'Support Engineer',
                'office': 'Tokyo',
                'age': 37,
                'date': '2009/08/19',
                'salary': '$139,575',
            },
            {
                'name': 'Thor Walton',
                'position': 'Developer',
                'office': 'New York',
                'age': 61,
                'date': '2013/08/11',
                'salary': '$98,540',
            },
            {
                'name': 'Finn Camacho',
                'position': 'Support Engineer',
                'office': 'San Francisco',
                'age': 47,
                'date': '2009/07/07',
                'salary': '$87,500',
            },
            {
                'name': 'Serge Baldwin',
                'position': 'Data Coordinator',
                'office': 'Singapore',
                'age': 64,
                'date': '2012/04/09',
                'salary': '$138,575',
            },
            {
                'name': 'Zenaida Frank',
                'position': 'Software Engineer',
                'office': 'New York',
                'age': 63,
                'date': '2010/01/04',
                'salary': '$125,250',
            },
            {
                'name': 'Zorita Serrano',
                'position': 'Software Engineer',
                'office': 'San Francisco',
                'age': 56,
                'date': '2012/06/01',
                'salary': '$115,000',
            },
            {
                'name': 'Jennifer Acosta',
                'position': 'Junior Javascript Developer',
                'office': 'Edinburgh',
                'age': 43,
                'date': '2013/02/01',
                'salary': '$75,650',
            },
            {
                'name': 'Cara Stevens',
                'position': 'Sales Assistant',
                'office': 'New York',
                'age': 46,
                'date': '2011/12/06',
                'salary': '$145,600',
            },
            {
                'name': 'Hermione Butler',
                'position': 'Regional Director',
                'office': 'London',
                'age': 47,
                'date': '2011/03/21',
                'salary': '$356,250',
            },
            {
                'name': 'Lael Greer',
                'position': 'Systems Administrator',
                'office': 'London',
                'age': 21,
                'date': '2009/02/27',
                'salary': '$103,500',
            },
            {
                'name': 'Jonas Alexander',
                'position': 'Developer',
                'office': 'San Francisco',
                'age': 30,
                'date': '2010/07/14',
                'salary': '$86,500',
            },
            {
                'name': 'Shad Decker',
                'position': 'Regional Director',
                'office': 'Edinburgh',
                'age': 51,
                'date': '2008/11/13',
                'salary': '$183,000',
            },
            {
                'name': 'Michael Bruce',
                'position': 'Javascript Developer',
                'office': 'Singapore',
                'age': 29,
                'date': '2011/06/27',
                'salary': '$183,000',
            },
            {
                'name': 'Donna Snider',
                'position': 'Customer Support',
                'office': 'New York',
                'age': 27,
                'date': '2011/01/25',
                'salary': '$112,000',
            }, 
        ],

    })

    return (
        <MDBDataTableV5 hover entriesOptions={[5, 10, 20, 25]} entries={10} pagesAmount={4} data={datatable} />
    );
}

function App() {  

  return ( 
  <>
  <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <a class="navbar-brand ps-3" href="index.html">Start Bootstrap</a>
            <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
            <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div class="input-group">
                    <input class="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>
                </div>
            </form>
            <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#!">Settings</a></li>
                        <li><a class="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#!">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <div class="sb-sidenav-menu-heading">Core</div>
                            <a class="nav-link" href="index.html">
                                <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </a>
                            <div class="sb-sidenav-menu-heading">Interface</div>
                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                Layouts
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav">
                                    <a class="nav-link" href="layout-static.html">Static Navigation</a>
                                    <a class="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                                </nav>
                            </div>
                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                                Pages
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                        Authentication
                                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                    </a>
                                    <div class="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav class="sb-sidenav-menu-nested nav">
                                            <a class="nav-link" href="login.html">Login</a>
                                            <a class="nav-link" href="register.html">Register</a>
                                            <a class="nav-link" href="password.html">Forgot Password</a>
                                        </nav>
                                    </div>
                                    <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                        Error
                                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                    </a>
                                    <div class="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav class="sb-sidenav-menu-nested nav">
                                            <a class="nav-link" href="401.html">401 Page</a>
                                            <a class="nav-link" href="404.html">404 Page</a>
                                            <a class="nav-link" href="500.html">500 Page</a>
                                        </nav>
                                    </div>
                                </nav>
                            </div>
                            <div class="sb-sidenav-menu-heading">Addons</div>
                            <a class="nav-link" href="charts.html">
                                <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                                Charts
                            </a>
                            <a class="nav-link" href="tables.html">
                                <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                                Tables
                            </a>
                        </div>
                    </div>
                    <div class="sb-sidenav-footer">
                        <div class="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
                </nav>
            </div>
            <div id="layoutSidenav_content">
                <main>
                    <div class="container-fluid px-4">
                        <h1 class="mt-4">Tables</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                            <li class="breadcrumb-item active">Tables</li>
                        </ol>
                        <div class="card mb-4">
                            <div class="card-body">
                                DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the
                                <a target="_blank" href="https://datatables.net/">official DataTables documentation</a>
                                .
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-header">
                                <i class="fas fa-table me-1"></i>
                                DataTable Example
                            </div>
                            <div class="card-body">
                                <NewTable></NewTable>
                            </div>
                        </div>
                    </div>
                </main>
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid px-4">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; Your Website 2022</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
  </>
  );
}

export default App;