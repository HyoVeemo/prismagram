import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes} from 'merge-graphql-schemas';
import path from 'path'

const allTypes = fileLoader(path.join(__dirname, "/api/**/*.graphql")) // 함수의 인자로 경로를 입력해야 함
const allResolvers = fileLoader(path.join(__dirname,"/api/**/*.js"))// api아래에 resolver 가 아닌 파일이 있으면 에러가 날것

const schemas = makeExecutableSchema({ // typeDefs, Resolvers
    typeDefs : mergeTypes(allTypes),
    resolvers: mergeResolvers(allResolvers)
});

export default schemas;
