import { Type, applyDecorators } from '@nestjs/common';
import { ApiOkResponse, ApiProperty, getSchemaPath } from '@nestjs/swagger';

export class ListDto<T> {
  @ApiProperty()
  current: number;

  @ApiProperty()
  pageSize: number;

  @ApiProperty()
  total: number;

  @ApiProperty()
  list: T[];
}

export const ApiPaginatedResponse = <TModel extends Type<any>>(
  model: TModel,
) => {
  return applyDecorators(
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(ListDto) },
          {
            properties: {
              results: {
                type: 'array',
                items: { $ref: getSchemaPath(model) },
              },
            },
          },
        ],
      },
    }),
  );
};
