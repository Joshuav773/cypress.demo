export default class Loan {
    _id:                         ObjectId;
    OriginationSystem:           string;
    LoanId:                      string;
    OldLoanId:                   null;
    CorrelationId:               null;
    SourceSystemID:              string;
    SentTime:                    ApplicationCreatedDate;
    LOSApplicationLink:          string;
    LOSApplicationDocumentsLink: null;
    WorkflowStatus:              string;
    WorkflowSubStatus:           null;
    ApplicationStatus:           string;
    FinanceProgram:              string;
    Product:                     string;
    LoanType:                    string;
    LoanPricingTypeID:           number;
    UccAssignment:               number;
    ApplicationCreatedDate:      ApplicationCreatedDate;
    ApplicationModifiedDate:     null;
    FundDate:                    ApplicationCreatedDate;
    ExpectedFundDate:            ApplicationCreatedDate;
    PurchasedDate:               null;
    TotalFinanceAmount:          string;
    FinanceRate:                 string;
    APR:                         string;
    Term:                        number;
    Period:                      number;
    PaymentAmount:               string;
    FirstPaymentDate:            ApplicationCreatedDate;
    MaturityDate:                ApplicationCreatedDate;
    FinanceTerms:                number;
    Applicant:                   string;
    AlternateFinanceBank:        string;
    OriginationCompanyNum:       string;
    FundCompanyNumber:           string;
    FundCompanyBankCode:         string;
    OriginationCompanyBankCode:  null;
    LeadOwner:                   string;
    CollateralType1:             null;
    HouseholdDeal:               number;
    SilverComplete:              null;
    IsCafe:                      number;
    UseOfFunds:                  string;
    AuctionQualified:            number;
    AvailForPlacement:           number;
    LenderPV:                    string;
    AccountNumber:               null;
    RoutingNumber:               null;
    AccountType:                 null;
    PaymentMethod:               number;
    LockoutPeriod:               number;
    AllowPartialPrepaymentFlag:  boolean;
    PrepaymentPenalties:         null;
    InterimRent:                 string;
    LifeInsuranceFee:            string;
    FeesDeferred:                string;
    DocFee:                      string;
    ProtectPlus:                 string;
    DirectOriginationExp:        string;
    InterestOnlyTerm:            number;
    InterestOnlyRate:            string;
    InterestOnlyPayment:         string;
    InterestOnlyFlag:            number;
    ProgramName:                 string;
    FEXPkgFeeRcvd:               number;
    PremiumPlusQual:             number;
    PricingLoanType:             number;
    AMIAdvanceAmt:               string;
    NLAdvanceAmt:                string;
    CMSLoanAmount:               string;
    Request1Amt:                 string;
    Request2Amt:                 string;
    CreditLimit:                 string;
    TPFFundAmt:                  string;
    FinalDTI:                    string;
    PerDiem:                     string;
    UnfinancedFees:              string;
    DisbursedAmount:             string;
    Agent:                       null;
    IOStripFV:                   string;
    DebtServiceRatio:            string;
    Disbursements:               Disbursement[];
    Companies:                   Company[];
    Guarantors:                  Guarantor[];
    BridgeLoanInformation:       null;
    AssociatedBridgeLoans:       null;
    Accounts:                    any[];
    ApplicationNumber:           number;
    LastOriginationSystemEvent:  string;
}

export class ApplicationCreatedDate {
    $date: string;
}

export class Company {
    CompanyNumber: number;
    CompanyName:   string;
    BusinessType:  string;
    CompanyTypeId: number;
    DBA:           string;
    Address:       Address;
    PhoneNumber:   null | string;
}

export class Address {
    AddressLine1: string;
    AddressLine2: null;
    City:         string;
    StateCode:    string;
    PostalCode:   string;
    CountryCode:  null;
}

export class Disbursement {
    DisbursementCode:        number;
    DisbursementDescription: string;
    DisbursementAmount:      string;
    DisburseMethod:          null;
    DisbursementNumber:      number;
    IsWaivedFlag:            boolean;
    IsUnfinanced:            boolean;
}

export class Guarantor {
    SSN:                    string;
    GuarantorNumber:        number;
    FirstName:              string;
    MiddleInitial:          string;
    LastName:               string;
    Address:                Address;
    PrimaryPhone:           string;
    MobilePhone:            string;
    EmailAddress:           string;
    Gender:                 null;
    Salutation:             null;
    Suffix:                 null;
    DateOfBirth:            ApplicationCreatedDate;
    DateOfDeath:            ApplicationCreatedDate;
    Fico:                   string;
    Cms:                    string;
    Dti:                    string;
    PersonalIncome:         string;
    BusinessIncome:         string;
    NetWorth:               string;
    YearsLicensed:          number;
    YearInIndustry:         ApplicationCreatedDate;
    LienPosition:           number;
    Specialty:              string;
    SpecialtyDesc:          string;
    ProfessionalTitle:      null;
    ProfessionalTitleGroup: null;
}

class ObjectId {
    _id: string;
}