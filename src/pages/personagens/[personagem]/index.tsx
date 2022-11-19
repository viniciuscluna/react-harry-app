import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import { Badge, Card, CardBody, CardImg, CardSubtitle, CardTitle, Col, Input, ListGroup, ListGroupItem, Row, Spinner, Table } from "reactstrap";
import { IconWand, IconUser, IconGenderMale, IconGift, IconAspectRatio, IconWood, IconBolt, IconHomePlus, IconChefHat } from '@tabler/icons';
import CharacterType from "../../../types/api/characterType";
import { getPersonagensByHouse } from "../../../services/apiService";
import { CHARACTER_LIST_KEY } from "../../../utils/constants";
import { useSessionStorage } from "usehooks-ts";

const tableStyle: React.CSSProperties = {
    maxHeight: '80vh'
}

const IndexPersonagens = () => {
    const router = useRouter();
    const namePersonagem = router.query.personagem as string;
    const [personagensHouse, setPersonagensHouse] = useState<CharacterType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [characters, __] = useSessionStorage<CharacterType[]>(CHARACTER_LIST_KEY, []);

    const personagem = useMemo(() => characters.find(f => f.name === namePersonagem), [characters, namePersonagem]); 

    useEffect(() => {
        if (personagem) {
            const fetchPersonagens = async () => {
                setPersonagensHouse(await getPersonagensByHouse(personagem.house || ''));
                setIsLoading(false);
            };
            fetchPersonagens();
        }
    }, [personagem]);

    if (!personagem)
        return (<></>);

    return (
        <div className="container-fluid my-4 ">
            <Row className="d-flex align-items-stretch justify-content-between gap-2">
                {/* Profile */}
                <Col sm={12} md={6} lg={4} xl={2}>
                    <Card>
                        <CardImg src={personagem.image} className="img-fluid p-1 rounded-3" />
                        <CardBody>
                            <Row>
                                <Col className="d-flex justify-content-around align-items-center">
                                    <h2 className="d-inline pull-left">{personagem.name}</h2>
                                    {personagem.wizard ?
                                        <Badge
                                            color="primary"
                                            pill
                                        >
                                            <IconChefHat className="mb-1" />   Bruxo
                                        </Badge> : <></>}
                                </Col>
                                <Row className="ms-1">
                                    <ListGroup flush >
                                        <ListGroupItem>
                                            <IconGenderMale className="mb-1" />  <strong>Gender: </strong>{personagem.gender}
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <IconGift className="mb-1 " /> <strong>Date of birth :</strong> {personagem.dateOfBirth.toString()}
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <IconUser className="mb-1" /> <strong> Actor :</strong>  {personagem.actor}
                                        </ListGroupItem>
                                    </ListGroup>
                                </Row>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                {/* Wand */}
                <Col lg={4}>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h4"><IconWand className="mb-2" /> Use a Varinha Harry</CardTitle>
                            <CardSubtitle className="mb-2">Wand description :</CardSubtitle>
                            <Row >
                                <ListGroup flush >
                                    <ListGroupItem>
                                        <IconBolt className="mb-1" />  <strong>Core: </strong> {personagem.wand.core}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <IconWood className="mb-1 " /> <strong>Wood :</strong>  {personagem.wand.wood}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <IconAspectRatio className="mb-1" /> <strong>Length :</strong> {personagem.wand.length}
                                    </ListGroupItem>
                                </ListGroup>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={4} >
                    <Card>
                        <CardBody>
                            <CardTitle tag="h4"><IconHomePlus className="mb-2" /> Integrantes da casa {personagem.house}</CardTitle>
                            <Row >
                                <div className="overflow-auto" style={tableStyle}>
                                    {isLoading ?
                                        <Spinner>
                                            Carregando...
                                        </Spinner>
                                        :
                                        <Table dark
                                        >
                                            <thead>
                                                <tr>
                                                    <th>
                                                        #
                                                    </th>
                                                    <th>
                                                        Nome
                                                    </th>
                                                    <th>
                                                        Tipo
                                                    </th>
                                                    <th>
                                                        Bruxo?
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {personagensHouse && personagensHouse.map((personagem, index) => (
                                                    <tr key={index}>
                                                        <th scope="row">
                                                            {index + 1}
                                                        </th>
                                                        <td>
                                                            {personagem.name}
                                                        </td>
                                                        <td>
                                                            {personagem.gender}
                                                        </td>
                                                        <td>
                                                            <Input type="checkbox" checked={personagem.wizard} disabled={true} />
                                                        </td>
                                                    </tr>
                                                ))}

                                            </tbody>
                                        </Table>
                                    }
                                </div>
                            </Row>
                        </CardBody>
                    </Card>

                </Col>
            </Row>
        </div>
    )
}

export default IndexPersonagens;
