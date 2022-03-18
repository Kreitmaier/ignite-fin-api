import { Statement } from "../entities/Statement";
import { ICreateStatementDTO } from "../useCases/createStatement/ICreateStatementDTO";
import { ICreateTransferStatementDTO } from "../useCases/createTransferStatement/ICreateTransferStatementDTO";
import { IGetBalanceDTO } from "../useCases/getBalance/IGetBalanceDTO";
import { IGetStatementOperationDTO } from "../useCases/getStatementOperation/IGetStatementOperationDTO";

export interface IStatementsRepository {
  create: (data: ICreateStatementDTO) => Promise<Statement>;
  findStatementOperation: (data: IGetStatementOperationDTO) => Promise<Statement | undefined>;
  getUserBalance: (data: IGetBalanceDTO) => Promise<
    { balance: number } | { balance: number, statement: Statement[] }
  >;
  createTransfer: (data: ICreateTransferStatementDTO) => Promise<Statement>;
}
