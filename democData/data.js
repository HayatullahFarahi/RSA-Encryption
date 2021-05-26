const data = {
  M16: {
    referenceNumber: 'MOI-005980',
    fiscalYear: 1399,
    fiscalMonth: '06',
    paymentYear: 1399,
    paymentMonth: '05',
    ministryCode: '120000',
    vendorCode: 'AVC00120',
    activityCode: '20120',
    description: 'string',
    employeeCount: {
      contractors: 450,
      permanent: 200,
      others: 300,
    },
    destination: [
      {
        title: 'KBL',
        code: '41212',
        accountNumber: '409898',
        vendorCode: 'AVC00200',
        amount: 3000,
        invoiceNumber: '20980970598675',
      },
    ],
  },
  M41: {
    ministryCode: '20100',
    employeeList: [
      {
        employeeCode: 'MoI-EM-0070',
        firstName: 'Sayed Nadir Shah',
        lastName: 'Nadir',
        fatherName: 'Shah Aqa',
        grandFatherName: 'Mir AhmadShah',
        enidNumber: '1234-1234-123456',
        position: 'developer',
        accountNumber: '02990023909090',
        tinNumber: '1000290090',
        totalPayableAmount: '10000',
        oldTazkiraNumber: {
          juldYear: 1308,
          juldType: 'qalam andaz',
          juldNumber: 1,
          pageNumber: 1,
          registrationNumber: 123456,
          sokokNumber: 1234,
          province: 'Kabul',
          district: 'Sharwali',
        },
        paymentGroups: {
          objectCodeList: [
            {
              tashkilCode: '120000',
              activityCode: '20110',
              fundCode: '10000',
              projectCode: '000000',
              locationCode: '9000',
              type: '2',
              objectCode: '21100',
              payments: {
                amount: 652000,
              },
            },
          ],
          deductionAccounts: [
            {
              code: '1203041',
              vendorCode: 'AVC9700028',
              tashkilCode: '120000',
              activityCode: '00000',
              fundCode: '10000',
              projectCode: '000000',
              locationCode: '9000',
              type: '0',
              objectCode: '41204',
              payments: {
                amount: 156000,
              },
            },
          ],
        },
      },
    ],
  },
};

const demoDataM16 = data.M16;
const demoDataM41 = data.M41;

export { demoDataM41, demoDataM16 };
