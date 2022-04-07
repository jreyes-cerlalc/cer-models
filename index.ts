import { SystemCity } from "./system-city.model";
import { SystemCountry } from "./system-country.model";
import { UserSettingNotification } from "./user-setting-notification.model";
import { UserToken } from "./user-token.model";
import { User } from "./user.model";
import { SystemVersion } from "./system-version.model";
import { SystemState } from "./system-state.model";
import { AdminSettingNotification } from "./admin-setting-notification.model";
import { AdminToken } from "./admin-token.model";
import { Admin } from "./admin.model";
import { ParameterizationQuestion } from "./parameterization-question.model";
import { ParameterizationTypeContract } from "./parameterization-type-contract.model";
import { ParameterizationQuestionsTypesContracts } from "./parameterization-questions-types-contracts.model";

export default [
  User,
  UserToken,
  UserSettingNotification,
  SystemVersion,
  SystemCountry,
  SystemState,
  SystemCity,
  Admin,
  AdminToken,
  AdminSettingNotification,
  ParameterizationQuestion,
  ParameterizationTypeContract,
  ParameterizationQuestionsTypesContracts,
];
