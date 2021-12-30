import React from 'react';
import PropTypes from 'prop-types'

function SmallBox(props) {
    return (
        <div className="col-md-4 mb-4">
							<div className={`card border-left-${props.colorBorde} shadow h-100 py-2`}>
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-success text-uppercase mb-1"> {props.titulo}</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">{props.cifra}</div>
										</div>
										<div className="col-auto">
											<i className={props.icono}></i>
										</div>
									</div>
								</div>
							</div>
						</div>
    )
   
}

SmallBox.defaultProps = {
    titulo :"sin titulo", 
    colorBorde : "Sin color de borde",
    cifra :"Sin cifra",
    icono :"Sin ícono"
}

SmallBox.propTypes = {
    atritutes: PropTypes.shape({
        titulo: PropTypes.string.isRequired,
        colorBorde: PropTypes.string.isRequired,
        cifra: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        icon: PropTypes.string.isRequired
    }) 
}

export default SmallBox
