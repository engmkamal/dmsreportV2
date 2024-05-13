[
    {
        "WfName": "Upload Report",
        "AcessPermission": "Public", 
        "AuthGroups": ["Basundhara Owners"],
        "AuthUsersADId": [],
        "AuthUsersEmpId": [],  
        "DisplayTxt": "View Report",
        "ViewUrl": { "siteUrl": "api/Report?type=", "qryStrKeyTyp": "ID", "mode": "&mode=read", "titleTag": "CBP-" },
        "MasterListInfo": { "name": "View Report", "select": "All"},
        "RenderDetListInfo": [{ "name": "View Report", "select": "All"}],
        "DetailsListInfo": [{ "name": "View Report", "select": "All"},
        { "name": "View Report", "select": "All"}],
        "DbViewColDef": [
            { "fldType": "TextField", "headerName": "Account No", "field": "accountNo", "editable":false, "minWidth": 150, "rowGroup": true },
            { "fldType": "TextField", "headerName": "account Type", "field": "accountType", "editable":true, "minWidth": 165, "rowGroup": false },
            { "fldType": "TextField", "headerName": "AccountTitle", "field": "accountTitle", "editable":true, "minWidth": 165, "rowGroup": false },            
            { "fldType": "TextField", "headerName": "DocumentType", "field": "documentType", "editable":false, "minWidth": 160, "rowGroup": false },
            { "fldType": "NumberField", "headerName": "PageCount", "field": "pageCount", "editable":true, "minWidth": 165 },
            { "fldType": "TextField", "headerName": "MobileNo", "field": "mobileNo", "editable":true, "minWidth": 200, "rowGroup": false }, 
            { "fldType": "TextField", "headerName": "NIDNo", "field": "nIDNo", "editable":true, "minWidth": 200, "rowGroup": false }, 
            { "fldType": "TextField", "headerName": "TINNo", "field": "tINNo", "editable":true, "minWidth": 200, "rowGroup": false }, 
            { "fldType": "TextField", "headerName": "TradeLicNo", "field": "tradeLicNo", "editable":true, "minWidth": 200, "rowGroup": false }, 
            { "fldType": "TextField", "headerName": "Passport", "field": "passport", "editable":true, "minWidth": 200, "rowGroup": false }, 
            { "fldType": "TextField", "headerName": "BirthRegNo", "field": "birthRegNo", "editable":true, "minWidth": 200, "rowGroup": false },
            { "fldType": "TextField", "headerName": "CIDNo", "field": "cIDNo", "editable":false, "minWidth": 120, "rowGroup": false },            
            { "fldType": "TextField", "headerName": "FileLocation", "field": "fileLocation", "editable":false, "minWidth": 120, "rowGroup": false },
            { "fldType": "TextField", "headerName": "User Name", "field": "userName", "editable":false, "minWidth": 150 },
            { "fldType": "GetSetDateField", "headerName": "Date", "field": "dateTime", "valueGetter":"documentDate", "editable":false, "minWidth": 150 }
        ],
        "MasterDetailViewColDef": [
            { "fldType": "TextField", "headerName": "Account No", "field": "accountNo", "editable":false, "minWidth": 150, "rowGroup": true },
            { "fldType": "TextField", "headerName": "account Type", "field": "accountType", "editable":true, "minWidth": 165, "rowGroup": false },
            { "fldType": "TextField", "headerName": "AccountTitle", "field": "accountTitle", "editable":true, "minWidth": 165, "rowGroup": false },            
            { "fldType": "TextField", "headerName": "DocumentType", "field": "documentType", "editable":false, "minWidth": 160, "rowGroup": false },
            { "fldType": "NumberField", "headerName": "PageCount", "field": "pageCount", "editable":true, "minWidth": 165 },
            { "fldType": "TextField", "headerName": "MobileNo", "field": "mobileNo", "editable":true, "minWidth": 200, "rowGroup": false }, 
            { "fldType": "TextField", "headerName": "NIDNo", "field": "nIDNo", "editable":true, "minWidth": 200, "rowGroup": false }, 
            { "fldType": "TextField", "headerName": "TINNo", "field": "tINNo", "editable":true, "minWidth": 200, "rowGroup": false }, 
            { "fldType": "TextField", "headerName": "TradeLicNo", "field": "tradeLicNo", "editable":true, "minWidth": 200, "rowGroup": false }, 
            { "fldType": "TextField", "headerName": "Passport", "field": "passport", "editable":true, "minWidth": 200, "rowGroup": false }, 
            { "fldType": "TextField", "headerName": "BirthRegNo", "field": "birthRegNo", "editable":true, "minWidth": 200, "rowGroup": false },
            { "fldType": "TextField", "headerName": "CIDNo", "field": "cIDNo", "editable":false, "minWidth": 120, "rowGroup": false },            
            { "fldType": "TextField", "headerName": "FileLocation", "field": "fileLocation", "editable":false, "minWidth": 120, "rowGroup": false },
            { "fldType": "TextField", "headerName": "User Name", "field": "userName", "editable":false, "minWidth": 150 },
            { "fldType": "GetSetDateField", "headerName": "Date", "field": "dateTime", "valueGetter":"documentDate", "editable":false, "minWidth": 150 }
        ]
    },
    {
        "WfName": "View Report",
        "AcessPermission": "Public", 
        "AuthGroups": ["Basundhara Owners"],
        "AuthUsersADId": [],
        "AuthUsersEmpId": [],  
        "DisplayTxt": "View Report",
        "ViewUrl": { "siteUrl": "api/Report?type=", "qryStrKeyTyp": "ID", "mode": "&mode=read", "titleTag": "CBP-" },
        "MasterListInfo": { "name": "View Report", "select": "All"},
        "RenderDetListInfo": [{ "name": "View Report", "select": "All"}],
        "DetailsListInfo": [{ "name": "View Report", "select": "All"},
        { "name": "View Report", "select": "All"}],
        "DbViewColDef": [
            { "fldType": "TextField", "headerName": "Project Name", "field": "projectName", "editable":true, "minWidth": 150 },
            { "fldType": "TextField", "headerName": "Document Type", "field": "documentType", "editable":false, "minWidth": 160 },
            { "fldType": "TextField", "headerName": "R File No", "field": "rFileNo", "editable":false, "minWidth": 120 },
            { "fldType": "TextField", "headerName": "Deed No", "field": "deedNo", "editable":false, "minWidth": 120 },            
            { "fldType": "GetSetDateField", "headerName": "Document Date", "field": "documentDate", "valueGetter":"documentDate", "editable":false, "minWidth": 150 },            
            { "fldType": "TextField", "headerName": "Mouza", "field": "mouza", "editable":false, "minWidth": 150, "hide":true },
            { "fldType": "TextField", "headerName": "Phase Name", "field": "phaseName", "editable":true, "minWidth": 165 },
            { "fldType": "GetSetDateField", "headerName": "Date Time", "field": "dateTime", "valueGetter":"dateTime", "editable":false, "minWidth": 120 },
            { "fldType": "TextField", "headerName": "IP Address", "field": "ipAddress", "editable":true, "minWidth": 200 }
        ],
        "MasterDetailViewColDef": [
            { "fldType": "TextField", "headerName": "Project Name", "field": "projectName", "editable":true, "minWidth": 150 },
            { "fldType": "TextField", "headerName": "Document Type", "field": "documentType", "editable":false, "minWidth": 160 },
            { "fldType": "TextField", "headerName": "R File No", "field": "rFileNo", "editable":false, "minWidth": 120 },
            { "fldType": "TextField", "headerName": "Deed No", "field": "deedNo", "editable":false, "minWidth": 120 },
            { "fldType": "GetSetDateField", "headerName": "Document Date", "field": "documentDate", "valueGetter":"documentDate", "editable":false, "minWidth": 150 },
            { "fldType": "TextField", "headerName": "Mouza", "field": "mouza", "editable":false, "minWidth": 100, "hide":true },
            { "fldType": "TextField", "headerName": "Phase Name", "field": "phaseName", "editable":true, "minWidth": 165 },
            { "fldType": "GetSetDateField", "headerName": "Date Time", "field": "dateTime", "valueGetter":"dateTime", "editable":false, "minWidth": 120 },
            { "fldType": "TextField", "headerName": "IP Address", "field": "ipAddress", "editable":true, "minWidth": 200 }
        ]
    },
    {
        "WfName": "Download Report",
        "AcessPermission": "Public", 
        "AuthGroups": ["Basundhara Owners"],
        "AuthUsersADId": [],
        "AuthUsersEmpId": [],  
        "DisplayTxt": "View Report",
        "ViewUrl": { "siteUrl": "api/Report?type=", "qryStrKeyTyp": "ID", "mode": "&mode=read", "titleTag": "CBP-" },
        "MasterListInfo": { "name": "View Report", "select": "All"},
        "RenderDetListInfo": [{ "name": "View Report", "select": "All"}],
        "DetailsListInfo": [{ "name": "View Report", "select": "All"},
        { "name": "View Report", "select": "All"}],
        "DbViewColDef": [
            { "fldType": "TextField", "headerName": "Project Name", "field": "projectName", "editable":true, "minWidth": 150 },
            { "fldType": "TextField", "headerName": "Document Type", "field": "documentType", "editable":false, "minWidth": 160 },
            { "fldType": "TextField", "headerName": "R File No", "field": "rFileNo", "editable":false, "minWidth": 120 },
            { "fldType": "TextField", "headerName": "Deed No", "field": "deedNo", "editable":false, "minWidth": 120 },            
            { "fldType": "GetSetDateField", "headerName": "Document Date", "field": "documentDate", "valueGetter":"documentDate", "editable":false, "minWidth": 150 },            
            { "fldType": "TextField", "headerName": "Mouza", "field": "mouza", "editable":false, "minWidth": 150, "hide":true },
            { "fldType": "TextField", "headerName": "Phase Name", "field": "phaseName", "editable":true, "minWidth": 165 },
            { "fldType": "TextField", "headerName": "User Name", "field": "UserName", "editable":true, "minWidth": 165 },
            { "fldType": "GetSetDateField", "headerName": "Date Time", "field": "dateTime", "valueGetter":"dateTime", "editable":false, "minWidth": 120 },
            { "fldType": "TextField", "headerName": "IP Address", "field": "ipAddress", "editable":true, "minWidth": 200 }
        ],
        "MasterDetailViewColDef": [
            { "fldType": "TextField", "headerName": "Project Name", "field": "projectName", "editable":true, "minWidth": 150 },
            { "fldType": "TextField", "headerName": "Document Type", "field": "documentType", "editable":false, "minWidth": 160 },
            { "fldType": "TextField", "headerName": "R File No", "field": "rFileNo", "editable":false, "minWidth": 120 },
            { "fldType": "TextField", "headerName": "Deed No", "field": "deedNo", "editable":false, "minWidth": 120 },
            { "fldType": "GetSetDateField", "headerName": "Document Date", "field": "documentDate", "valueGetter":"documentDate", "editable":false, "minWidth": 150 },
            { "fldType": "TextField", "headerName": "Mouza", "field": "mouza", "editable":false, "minWidth": 100, "hide":true },
            { "fldType": "TextField", "headerName": "Phase Name", "field": "phaseName", "editable":true, "minWidth": 165 },
            { "fldType": "TextField", "headerName": "User Name", "field": "UserName", "editable":true, "minWidth": 165 },
            { "fldType": "GetSetDateField", "headerName": "Date Time", "field": "dateTime", "valueGetter":"dateTime", "editable":false, "minWidth": 120 },
            { "fldType": "TextField", "headerName": "IP Address", "field": "ipAddress", "editable":true, "minWidth": 200 }
        ]
    },
    {
        "WfName": "Email Report",
        "AcessPermission": "Public", 
        "AuthGroups": ["Basundhara Owners"],
        "AuthUsersADId": [],
        "AuthUsersEmpId": [],  
        "DisplayTxt": "View Report",
        "ViewUrl": { "siteUrl": "api/Report?type=", "qryStrKeyTyp": "ID", "mode": "&mode=read", "titleTag": "CBP-" },
        "MasterListInfo": { "name": "View Report", "select": "All"},
        "RenderDetListInfo": [{ "name": "View Report", "select": "All"}],
        "DetailsListInfo": [{ "name": "View Report", "select": "All"},
        { "name": "View Report", "select": "All"}],
        "DbViewColDef": [
            { "fldType": "TextField", "headerName": "Project Name", "field": "projectName", "editable":true, "minWidth": 150 },
            { "fldType": "TextField", "headerName": "Document Type", "field": "documentType", "editable":false, "minWidth": 160 },
            { "fldType": "TextField", "headerName": "R File No", "field": "rFileNo", "editable":false, "minWidth": 120 },
            { "fldType": "TextField", "headerName": "Deed No", "field": "deedNo", "editable":false, "minWidth": 120 },            
            { "fldType": "GetSetDateField", "headerName": "Document Date", "field": "documentDate", "valueGetter":"documentDate", "editable":false, "minWidth": 150 },            
            { "fldType": "TextField", "headerName": "Mouza", "field": "mouza", "editable":false, "minWidth": 150, "hide":true },
            { "fldType": "TextField", "headerName": "Phase Name", "field": "phaseName", "editable":true, "minWidth": 165 },
            { "fldType": "TextField", "headerName": "User Name", "field": "UserName", "editable":true, "minWidth": 165 },
            { "fldType": "TextField", "headerName": "Recipient", "field": "Recipient", "editable":true, "minWidth": 165 },
            { "fldType": "GetSetDateField", "headerName": "Date Time", "field": "dateTime", "valueGetter":"dateTime", "editable":false, "minWidth": 120 },
            { "fldType": "TextField", "headerName": "IP Address", "field": "ipAddress", "editable":true, "minWidth": 200 }
        ],
        "MasterDetailViewColDef": [
            { "fldType": "TextField", "headerName": "Project Name", "field": "projectName", "editable":true, "minWidth": 150 },
            { "fldType": "TextField", "headerName": "Document Type", "field": "documentType", "editable":false, "minWidth": 160 },
            { "fldType": "TextField", "headerName": "R File No", "field": "rFileNo", "editable":false, "minWidth": 120 },
            { "fldType": "TextField", "headerName": "Deed No", "field": "deedNo", "editable":false, "minWidth": 120 },
            { "fldType": "GetSetDateField", "headerName": "Document Date", "field": "documentDate", "valueGetter":"documentDate", "editable":false, "minWidth": 150 },
            { "fldType": "TextField", "headerName": "Mouza", "field": "mouza", "editable":false, "minWidth": 100, "hide":true },
            { "fldType": "TextField", "headerName": "Phase Name", "field": "phaseName", "editable":true, "minWidth": 165 },
            { "fldType": "TextField", "headerName": "User Name", "field": "UserName", "editable":true, "minWidth": 165 },
            { "fldType": "TextField", "headerName": "Recipient", "field": "Recipient", "editable":true, "minWidth": 165 },
            { "fldType": "GetSetDateField", "headerName": "Date Time", "field": "dateTime", "valueGetter":"dateTime", "editable":false, "minWidth": 120 },
            { "fldType": "TextField", "headerName": "IP Address", "field": "ipAddress", "editable":true, "minWidth": 200 }
        ]
    },    
    {
        "WfName": "Print Report",
        "AcessPermission": "Public", 
        "AuthGroups": ["Basundhara Owners"],
        "AuthUsersADId": [],
        "AuthUsersEmpId": [],  
        "DisplayTxt": "View Report",
        "ViewUrl": { "siteUrl": "api/Report?type=", "qryStrKeyTyp": "ID", "mode": "&mode=read", "titleTag": "CBP-" },
        "MasterListInfo": { "name": "View Report", "select": "All"},
        "RenderDetListInfo": [{ "name": "View Report", "select": "All"}],
        "DetailsListInfo": [{ "name": "View Report", "select": "All"},
        { "name": "View Report", "select": "All"}],
        "DbViewColDef": [
            { "fldType": "TextField", "headerName": "Project Name", "field": "projectName", "editable":true, "minWidth": 150 },
            { "fldType": "TextField", "headerName": "Document Type", "field": "documentType", "editable":false, "minWidth": 160 },
            { "fldType": "TextField", "headerName": "R File No", "field": "rFileNo", "editable":false, "minWidth": 120 },
            { "fldType": "TextField", "headerName": "Deed No", "field": "deedNo", "editable":false, "minWidth": 120 },            
            { "fldType": "GetSetDateField", "headerName": "Document Date", "field": "documentDate", "valueGetter":"documentDate", "editable":false, "minWidth": 150 },            
            { "fldType": "TextField", "headerName": "Mouza", "field": "mouza", "editable":false, "minWidth": 150, "hide":true },
            { "fldType": "TextField", "headerName": "Phase Name", "field": "phaseName", "editable":true, "minWidth": 165 },
            { "fldType": "TextField", "headerName": "User Name", "field": "UserName", "editable":true, "minWidth": 165 },            
            { "fldType": "GetSetDateField", "headerName": "Date Time", "field": "dateTime", "valueGetter":"dateTime", "editable":false, "minWidth": 120 },
            { "fldType": "TextField", "headerName": "IP Address", "field": "ipAddress", "editable":true, "minWidth": 200 }
        ],
        "MasterDetailViewColDef": [
            { "fldType": "TextField", "headerName": "Project Name", "field": "projectName", "editable":true, "minWidth": 150 },
            { "fldType": "TextField", "headerName": "Document Type", "field": "documentType", "editable":false, "minWidth": 160 },
            { "fldType": "TextField", "headerName": "R File No", "field": "rFileNo", "editable":false, "minWidth": 120 },
            { "fldType": "TextField", "headerName": "Deed No", "field": "deedNo", "editable":false, "minWidth": 120 },
            { "fldType": "GetSetDateField", "headerName": "Document Date", "field": "documentDate", "valueGetter":"documentDate", "editable":false, "minWidth": 150 },
            { "fldType": "TextField", "headerName": "Mouza", "field": "mouza", "editable":false, "minWidth": 100, "hide":true },
            { "fldType": "TextField", "headerName": "Phase Name", "field": "phaseName", "editable":true, "minWidth": 165 },
            { "fldType": "TextField", "headerName": "User Name", "field": "UserName", "editable":true, "minWidth": 165 },            
            { "fldType": "GetSetDateField", "headerName": "Date Time", "field": "dateTime", "valueGetter":"dateTime", "editable":false, "minWidth": 120 },
            { "fldType": "TextField", "headerName": "IP Address", "field": "ipAddress", "editable":true, "minWidth": 200 }
        ]
    }

 
]