import React from "react";
import { Route, Switch } from "react-router-dom";
import  HomePage from './pages/HomePage'
import  CandidatesPage from './pages/CandidatesPage'
import  CompanyPage from './pages/CompanyPage'
import  EditCandidatePage from './pages/EditCandidatePage'
import AddCandidate from "./pages/AddCandidate";

export default function Routes() {
    return (
        <div>
        <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/candidates" exact component={CandidatesPage} />
        <Route path="/company" exact component={CompanyPage} />
        <Route path="/candidates/:id" exact component={EditCandidatePage} />
        <Route path="/add" exact component={AddCandidate} />
        </Switch>
        </div>
    )
}