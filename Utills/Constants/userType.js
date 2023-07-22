


const userTypesObject = {
    userTypes: {
        customer: 'CUSTOMER',
        engineer: 'CLIENT',
        admin: 'ADMIN'
    },
    userStatus: {
        pending:  'PENDING',
        approved: 'APPROVED',
        rejected: 'REJECTED'
    }
}

const bookingAndPaymentObjects = {
    paymentStatus : {
        success : 'SUCCESS',
        failed : 'FAILED'
    },
    bookingStatus : {
        inProgress : 'IN_PROGRESS',
        completed : 'COMPLETED',
        cancelled : 'CANCELLED'
    },
}

module.exports = {userTypesObject , bookingAndPaymentObjects}