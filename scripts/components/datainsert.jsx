import React from 'react'

let DataInsert = React.createClass({
	render: function () {
		return (
			<div className="card form-wrapper">
			    <form name="findFlights" novalidate>
			        <div className="group">
			            <label>Name</label>
			        	<input type="text" name="name" placeholder="Name" required />
			        </div>
			        <div className="group">
			        	<label>Code</label>
			        	<input type="text" name="code" placeholder="Code" required />
			        </div>
			        <div className="group">
			            <label>Data</label>
			            <input type="text" name="startdate" placeholder="Data" required />
			        </div>
			        <div className="group">
			            <label>Note</label>
			            <textarea rows={5} required></textarea>
			        </div>
			        <div className="group">
			            <button type="submit" className="btn">Invia <span className="chevron right"></span></button>
			        </div>
			    </form>
			</div>
		)
	}
});

export default DataInsert;