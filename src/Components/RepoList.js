import React from "react";
import { Card } from "react-bootstrap";

function RepoList({ repositories }) {
  return (
    <div>
      {repositories && repositories.length > 0 ? (
        repositories.map((repository) => (

          <Card key={repository.id} className="shadow-sm">
  <Card.Body>
    <Card.Title className="d-flex justify-content-start align-items-center">
      <p className="mb-0">{repository.name}</p>
      {/* Public/Private Badge */}
      {repository.visibility === 'public' ? (
       <span
       className="v-align-middle ms-2"
       style={{
         fontSize: '0.8rem',
         backgroundColor: '#EFF8FF',
         borderRadius: '15px',       
         padding: '0.2rem 0.4rem',  
         fontWeight: 300,          
         color: '#175CD3',          
         border: '1px solid rgb(121, 173, 225)',
       }}
     >
       Public
     </span>
      ) : (
        <span
        className="v-align-middle ms-2"
        style={{
          fontSize: '0.8rem',
          backgroundColor: '#EFF8FF', 
          borderRadius: '15px',      
          padding: '0.2rem 0.4rem',  
          fontWeight: 300,           
          color: '#175CD3',          
          border: '1px solid rgb(121, 173, 225)', 
        }}
      >
        Private
      </span>
      
      )}
    </Card.Title>
    <Card.Subtitle className="mb-2 text-muted d-flex gap-3">
      <span>{repository.language}</span>
      <i className="fa-solid fa-circle" style={{ color: "#3d7ef0", fontSize: '0.5rem', marginLeft: '-10px', marginTop: '6px' }}></i>
      <i className="fa-solid fa-database" style={{ color: "#00040a", fontSize: '0.9rem', marginLeft: '12px', marginTop: '4px' }}></i>
      <span>{repository.storage}</span>
      <span>Updated {repository.update} days ago</span>
    </Card.Subtitle>
  </Card.Body>
</Card>

        
        ))
      ) : (
        <p>No repositories available.</p>
      )}
    </div>
  );
}

export default RepoList;
